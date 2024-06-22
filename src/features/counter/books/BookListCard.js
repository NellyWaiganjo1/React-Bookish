import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { Row } from 'react-bootstrap';

const BookListCard = ({ book, onViewDetails }) => {
  const { title, authors, cover_id, key } = book;
  const authorNames = authors ? authors.map(a => a.name).join(', ') : 'Unknown author';
  const coverUrl = cover_id ? `https://covers.openlibrary.org/b/id/${cover_id}-L.jpg` : ''; // Use 'L' for larger size

  const handleClick = () => {
    onViewDetails(key);
  };

  return (
    <div className='card-container mt-4'>
        <Row xs="1" sm="2" md="3" lg="4">
            <Card className="book-card" style={{ width: '18rem', marginBottom: '10px', display: '-ms-grid' }}>
                <CardImg src={coverUrl} alt={`${title} cover`} />
                <CardBody>
                    <CardTitle tag="h5">{title}</CardTitle>
                    <CardText>Author: {authorNames}</CardText>
                    <button onClick={handleClick} className="btn btn-outline-success rounded-pill">
                        View Details
                    </button>
                </CardBody>
            </Card>
        </Row>
      
    </div>
  );
};

export default BookListCard;