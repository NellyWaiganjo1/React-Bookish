import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
    const { key, title, coverUrl } = book;

    return (
        <Card>
            <CardImg top width="100%" src={coverUrl} alt={title} />
            <CardBody>
                <CardTitle tag="h5">{title}</CardTitle>
                <Link to={`/details/${encodeURIComponent(key)}`}>
                    <Button className="btn rounded-pill mb-2">View Details</Button>
                </Link>
            </CardBody>
        </Card>
    );
};

export default BookCard;

