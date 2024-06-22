import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SYNOPSIS } from '../../app/shared/SYNOPSIS';
import { BOOKS } from '../../app/shared/BOOKS';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import LoginModal from '../../components/LoginModal'; // Import your LoginModal component here
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Synopsis = () => {
    const { bookid } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

    const book = BOOKS.find(book => book.id === parseInt(bookid));
    const synopsis = SYNOPSIS.find(synopsis => synopsis.bookid === parseInt(bookid));

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    if (!book) {
        return <div>Book not found</div>;
    }

    if (!synopsis) {
        return <div>Synopsis not found</div>;
    }

    return (
        <Container>
            <Row className="my-5">
                <Col md="12">
                    <Link to="/library" className="text-decoration-none text-dark">
                        <FontAwesomeIcon icon={faArrowLeft} size="lg" /> Back to Library
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <Card>
                        <CardImg top width="100%" src={book.image} alt={book.name} />
                        <CardBody>
                            <CardTitle tag="h5">{book.name}</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="6">
                    <h2>Synopsis</h2>
                    <p>{synopsis.text}</p>
                    <p><strong>Author:</strong> {synopsis.author}</p>
                    <Button color="success" onClick={toggleModal}>Continue Reading</Button>
                </Col>
            </Row>
            {/* Render the LoginModal component */}
            <LoginModal isOpen={isModalOpen} toggle={toggleModal} />
        </Container>
    );
};

export default Synopsis;
