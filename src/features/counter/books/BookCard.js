import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import LoginModal from '../../../components/LoginModal'; // Ensure correct path

const BookCard = ({ book }) => {
    const { title, coverUrl } = book;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <Card>
            <CardImg top width="100%" src={coverUrl} alt={title} />
            <CardBody>
                <CardTitle tag="h5">{title}</CardTitle>
                
                <button className="btn btn-success rounded-pill mb-2" onClick={toggleModal}>
                      View Details
                </button>
            </CardBody>

            {/* Login Modal */}
            <LoginModal isOpen={isModalOpen} toggle={toggleModal} />
        </Card>
    );
};

export default BookCard;


