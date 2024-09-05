import React from 'react';
import css from './Contact.module.css';

const Contact = () => {
  return (
    <div className={css.contactsPage}>
      <div className="container">
        <h1 className={css.title}>Contacts</h1>

        <div className={css.contactInfo}>
          <div className={css.infoSection}>
            <h2>Our address</h2>
            <p>st. Musical, 123</p>
            <p>Kyiv, 01001</p>
            <p>Ukraine</p>
          </div>

          <div className={css.infoSection}>
            <h2>Contact us</h2>
            <p>Telephone: +380 44 123 4567</p>
            <p>Email: info@guitarshop.com</p>
          </div>

          <div className={css.infoSection}>
            <h2>Opening hours</h2>
            <p>Mon-Fri: 9:00 - 18:00</p>
            <p>Sat: 10:00 - 16:00</p>
            <p>Sun: Closed</p>
          </div>
        </div>

        <div className={css.contactForm}>
          <h2>Send a message</h2>
          <form>
            <div className={css.formGroup}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className={css.formGroup}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className={css.formGroup}>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>

            <button type="submit" className={css.submitButton}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
