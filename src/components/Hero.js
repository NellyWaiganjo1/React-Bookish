import React from 'react';
import '../../src/App.css';
import heroImage from '../app/assets/img/hero.jpeg'; // Import your hero image
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1 className='title'>Welcome to Bookish</h1>
                <p className='para'>Immerse Yourself in a Sea of Stories at Bookish. Find Your Genre, Discover Your Next Adventure!</p>
                <Link to="/library">
                    <button className="btn btn-outline-success rounded-pill mb-2">Explore Now</button>
                </Link>
            </div>
            <div className="hero-overlay"></div> {/* Add a separate div for the gradient overlay */}
            <img src={heroImage} alt="Hero" className="hero-image" /> {/* Add the hero image */}
        </div>
    );
};

export default Hero;
