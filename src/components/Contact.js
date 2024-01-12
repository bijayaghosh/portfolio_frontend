// src/components/Contact.js

import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/portfolio/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // Handle the response, show success message, etc.
      console.log(data);
    } catch (error) {
      // Handle errors, show error message, etc.
      console.error(error);
    }
  };

  return (
    <div>
      <header>
        <h1>Contact Us</h1>
      </header>

      <nav>
        {/* Add navigation links to other pages */}
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>

      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>

      <footer>
        {/* Add your contact details in the footer */}
        <p>Contact me at: your.email@example.com</p>
      </footer>
    </div>
  );
};

export default Contact;
