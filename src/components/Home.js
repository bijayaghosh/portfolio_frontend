// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header>
        <h1>Bijaya Ghosh - Portfolio</h1>
        {/* Add your banner or any other content you want in the header */}
      </header>

      <section>
        <h2>Gallery</h2>
        {/* Add your gallery component or images here */}
      </section>

      <footer>
        {/* Add your contact details in the footer */}
        <p>Contact me at: hi@bijaya.me</p>
      </footer>

      <nav>
        {/* Add navigation links to other pages */}
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Home;
