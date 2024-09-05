import React from 'react';
import { Link } from 'react-router-dom';
import css from './Footer.module.css';

import logo from '../../images/icons/logo-white.svg';

const Footer = () => {
  return (
    <section className={css.footer}>
      <div className="container">
        <div className={css.wrapper}>
          <div className={css.logo}>
            <img src={logo} alt="logo" width="150" height="30" loading="lazy" />
          </div>
          <ul className={css.navigation}>
            <li className={css.navigationItem}>
              <Link to="/">Home</Link>
            </li>
            <li className={css.navigationItem}>
              <Link to="/catalog">Catalog</Link>
            </li>
            <li className={css.navigationItem}>
              <Link to="/news">News</Link>
            </li>
            <li className={css.navigationItem}>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
          <div className={css.contacts}>
            <div className={css.contactsTitle}>
              <p className={css.title}>Contact Us</p>
            </div>
            <ul className={css.socialList}>
              <li className={css.socialItem}>
                <a href="https://www.instagram.com/" target="blank">
                  <svg
                    className={css.socialIcon}
                    width="20"
                    height="20"
                    loading="lazy"
                    aria-label="instagramm"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm4-13H6a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6Zm5 14a4 4 0 0 1-5 5H6a4 4 0 0 1-5-5V6a4 4 0 0 1 5-5h8a4 4 0 0 1 5 5v8Zm-3-9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                      fill="#F8F1EA"
                    />
                  </svg>
                </a>
              </li>
              <li className={css.socialItem}>
                <a href="http://www.facebook.com/" target="blank">
                  <svg
                    className={css.socialIcon}
                    width="10"
                    height="20"
                    loading="lazy"
                    fill="none"
                    aria-label="facebook"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 20v-9H0V7h3V4c0-2 1-4 5-4h2v3H8C6 3 6 4 6 5v2h4v4H6v9H3Z"
                      fill="#F8F1EA"
                    />
                  </svg>
                </a>
              </li>
              <li className={css.socialItem}>
                <a href="https://ru.pinterest.com/" target="blank">
                  <svg
                    className={css.socialIcon}
                    width="15"
                    height="20"
                    loading="lazy"
                    fill="none"
                    aria-label="pinterest"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0C4 0 0 3 0 7c0 3 2 5 2 5l1-2-1-3c0-3 3-5 6-5 2 0 4 2 4 4s-1 6-3 6l-2-1 1-5c0-2-4-2-4 1l1 2-2 9v2l3-7 3 1c4 0 6-4 6-7 0-4-3-7-7-7Z"
                      fill="#F8F1EA"
                    />
                  </svg>
                </a>
              </li>
              <li className={css.socialItem}>
                <a href="https://x.com/?" target="blank">
                  <svg
                    className={css.socialIconStroke}
                    width="26"
                    height="22"
                    loading="lazy"
                    fill="none"
                    aria-label="twitter"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m25 1-3 2a5 5 0 0 0-6-2l-2 2-1 3v1A11 11 0 0 1 3 2s-4 10 6 15l-8 2c10 5 22 0 22-13V5l2-4Z"
                      stroke="#F8F1EA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li className={css.socialItem}>
                <a href="https://www.youtube.com/" target="blank">
                  <svg
                    className={css.socialIconStroke}
                    width="29"
                    height="22"
                    loading="lazy"
                    fill="none"
                    aria-label="youtube"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27 4V3l-2-1H4L2 3v16l2 1h21l2-1V4v0Z"
                      stroke="#F8F1EA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m19 12-7-5v9l7-4Z"
                      stroke="#F8F1EA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            <div className={css.contactTel}>
              <a href="tel:+0800 300 4040">0800 300 4040</a>
            </div>
          </div>
          <div className={css.copyright}>
            <p className={css.copyrightText}>
              © Copyright 2022. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
