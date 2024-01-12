// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <header>
        <h1>Bijaya Ghosh - Portfolio</h1>
        {/* Add your banner or any other content you want in the header */}
      </header>

      <nav>
        {/* Add navigation links to other pages */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <section>
        <h2>Gallery</h2>
        {/* Add your gallery component or images here */}
      </section>

      <footer>
        {/* Add your contact details in the footer */}
        <p>Contact me at: your.email@example.com</p>
      </footer>
    </div>
  );
};

export default Home;
