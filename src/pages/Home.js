import React from 'react';
import Hero from '../components/Hero';
import About from './About';
import Contact from './Contact';
import { Element } from 'react-scroll';

const Home = () => {
    return (
        <div>
            <Hero />
            <Element name="about">
                <About />
            </Element>
            <Element name="contact">
                <Contact />
            </Element>
        </div>
    );
};

export default Home;