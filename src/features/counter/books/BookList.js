import React, { useState, useEffect } from 'react';
import { Spinner } from 'reactstrap';

const BookList = ({ searchTerm, setBooks }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            setIsLoading(true);
            setError(null);

            let url = 'https://openlibrary.org/people/mekBot/books/want-to-read.json';

            if (searchTerm) {
                url = `https://openlibrary.org/search.json?title=${encodeURIComponent(searchTerm)}`;
            }

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                let booksData = [];
                if (data.docs) {
                    booksData = data.docs.map((book) => ({
                        key: book.key,
                        title: book.title,
                        coverUrl: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : 'https://via.placeholder.com/150',
                    }));
                } else if (data.reading_log_entries) {
                    booksData = data.reading_log_entries.map((entry) => ({
                        key: entry.work.key,
                        title: entry.work.title,
                        coverUrl: entry.work.cover_id ? `https://covers.openlibrary.org/b/id/${entry.work.cover_id}-L.jpg` : 'https://via.placeholder.com/150',
                    }));
                } else {
                    booksData = []; // Handle case where data is in an unexpected format
                }

                setBooks(booksData);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBooks();
    }, [searchTerm, setBooks]);

    if (isLoading) {
        return <Spinner>Loading books...</Spinner>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return null;
};

export default BookList;
