import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, Button, Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import BookList from '../features/counter/books/BookList';
import { BOOKS } from '../app/shared/BOOKS';
import BookCard from '../features/counter/books/BookCard';

const Library = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        setBooks([]);
    };

    return (
        <>
            <Container className="mt-5">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Library</BreadcrumbItem>
                </Breadcrumb>

                <div className="mt-4">
                    <h1>Search Books</h1>
                    <input
                        type="text"
                        placeholder="Enter search term"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <Button
                        className="btn btn-primary ms-2"
                        onClick={handleSearchClick}
                    >
                        Search
                    </Button>
                    <BookList searchTerm={searchTerm} setBooks={setBooks} setSearchTerm={setSearchTerm} />
                </div>

                <div className="mt-4">
                    <h1>Search Results</h1>
                    <Row xs="1" sm="2" md="3" lg="4">
                        {books.length > 0 ? (
                            books.map((book, index) => (
                                <Col key={index} className="mb-4">
                                    <BookCard book={book} />
                                </Col>
                            ))
                        ) : (
                            <p>No books found.</p>
                        )}
                    </Row>
                </div>

                <div className="mt-4">
                    <h1>Static Books</h1>
                    <Row xs="1" sm="2" md="3" lg="4">
                        {BOOKS.map(book => (
                            <Col md="4" className="mb-4" key={book.id}>
                                <Card>
                                    <CardImg top width="100%" src={book.image} alt={book.name} />
                                    <CardBody>
                                        <CardTitle tag="h5">{book.name}</CardTitle>
                                        <Link to={`/synopsis/${book.id}`}>
                                            <Button className="btn rounded-pill mb-2">Read Synopsis</Button>
                                        </Link>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </>
    );
};

export default Library;
