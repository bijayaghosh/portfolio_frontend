// src/components/About.js

import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      <header>
        <h1>About Us</h1>
      </header>

      <nav>
        {/* Add navigation links to other pages */}
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>

      <section>
        <p>
          Welcome to my portfolio website! I am Bijaya Ghosh, a passionate web developer with a focus on creating
          meaningful and user-friendly applications. I have experience in the MERN stack (MongoDB, Express.js, React,
          Node.js) and enjoy turning ideas into reality through coding.
        </p>

        <p>
          My goal is to continuously learn and grow as a developer while delivering high-quality solutions to meet the
          needs of clients and users. Whether it's front-end development using React or back-end server logic with
          Node.js, I am committed to building robust and efficient applications.
        </p>

        <p>
          Feel free to explore the rest of the website, check out my projects, and get in touch if you have any
          inquiries or collaboration opportunities. Thank you for visiting!
        </p>
      </section>

      <footer>
        {/* Add your contact details in the footer */}
        <p>Contact me at: your.email@example.com</p>
      </footer>
    </div>
  );
};

export default About;
