import React from 'react';
import css from './Card.module.css';

const images = {};
const importAllImages = r => {
  r.keys().forEach(key => {
    images[key.replace('./', '')] = r(key);
  });
};
importAllImages(
  require.context('../../images/arrivals', false, /\.(png|jpe?g|svg)$/)
);

const getImagePath = path => {
  return images[path];
};

const Card = ({ label, name, price, images, quantity }) => {
  const isSoldOut = Number(quantity) === 0;

  const cardLabel = isSoldOut ? 'Sold' : label;

  return (
    <div className={` ${isSoldOut ? css.soldOutCard : css.card}`}>
      <div className={`${css.label} ${isSoldOut ? css.soldOutLabel : ''}`}>
        <p>{cardLabel}</p>
      </div>
      <img
        className={css.cardImg}
        width="200"
        height="370"
        srcSet={`${getImagePath(images['1x'])} 1x, ${getImagePath(
          images['2x']
        )} 2x, ${getImagePath(images['3x'])} 3x`}
        src={getImagePath(images['1x'])}
        alt={name}
        loading="lazy"
        fetchpriority="low"
        decoding="async"
      />
      <div className={css.descr}>
        <p className={css.name}>{name}</p>
        <p className={css.price}>{price}</p>
      </div>
    </div>
  );
};

export default Card;
