import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Library from './pages/Library';
import Synopsis from './features/synopsis/Synopsis';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term.toLowerCase());
    };

    return (
        <>
            <Header onSearch={handleSearch} />
            <Routes>
                <Route path='/' element={<Home searchTerm={searchTerm} />} />
                <Route path='about' element={<About />} />
                <Route path='library' element={<Library searchTerm={searchTerm} />} />
                <Route path='/synopsis/:bookid' element={<Synopsis />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
