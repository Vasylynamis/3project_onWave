import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import logoMob from '../../images/navigation/logo_mob.svg';
import profile from '../../images/icons/profile.svg';
import burger from '../../images/icons/burger.svg';
import SearchBar from '../SearchBar/SearchBar';
import Modal from '../Modal/Modal';

const Navigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className={css.navigation}>
      <div className="container">
        <div className={css.wrapper}>
          <div className={css.logoMob}>
            <NavLink to="/">
              <img src={logoMob} alt="logo" width="100" height="19" />
            </NavLink>
          </div>
          <nav className={css.navigationTablet}>
            <NavItem to="/" label="Home" />
            <NavItem to="/catalog" label="Catalog" />
            <NavItem to="/news" label="News" />
            <NavItem to="/contacts" label="Contacts" />
          </nav>
          <div className={css.searchWrapper}>
            <div className={css.search}>
              <SearchBar />
            </div>
            <button className={css.profile}>
              <img src={profile} alt="profile" width="20" height="20" />
            </button>
          </div>
          <button className={css.menu} onClick={openModal}>
            <img src={burger} alt="menu" width="22" height="20" />
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
    </section>
  );
};

const NavItem = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${css.navigationTabletItem} ${css.activeItem}`
          : css.navigationTabletItem
      }
    >
      <span className={css.navigationLink}>{label}</span>
    </NavLink>
  );
};

export default Navigation;
