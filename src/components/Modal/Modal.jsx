import React from 'react';
import css from './Modal.module.css';
import { Link } from 'react-router-dom';
import cross from '../../images/icons/cross.svg';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={css.modalOverlay} onClick={onClose}>
      <div className={css.modalContent} onClick={e => e.stopPropagation()}>
        <button className={css.closeButton} onClick={onClose}>
          <img src={cross} alt="close" />
        </button>
        <ul className={css.modalList}>
          <li onClick={onClose} className={css.modalItem}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={onClose} className={css.modalItem}>
            <Link to="/catalog">Catalog</Link>
          </li>
          <li onClick={onClose} className={css.modalItem}>
            <Link to="/news">News</Link>
          </li>
          <li onClick={onClose} className={css.modalItem}>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
