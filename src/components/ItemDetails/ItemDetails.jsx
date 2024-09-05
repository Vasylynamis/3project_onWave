import React from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import css from './ItemDetails.module.css';
import itemsData from '../../data/items.json';

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

const ItemDetails = () => {
  const { itemId } = useParams();
  const item = itemsData.find(item => item.id === itemId);

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div className={css.itemDetails}>
      <div className="container">
        <div className={css.itemDetailsPage}>
          <h1>{item.name}</h1>
          <img
            srcSet={`${getImagePath(item.images['1x'])} 1x, ${getImagePath(
              item.images['2x']
            )} 2x, ${getImagePath(item.images['3x'])} 3x`}
            src={getImagePath(item.images['1x'])}
            alt={item.name}
            width="400"
            height="740"
          />
          <p className={css.price}>{item.price}</p>
          <div className={css.description}>
            <p className={css.descriptionTitle}>Characteristics</p>
            <ul className={css.descriptionList}>
              {item.characteristics.map(characteristic => (
                <li className={css.descriptionItem} key={nanoid()}>
                  {characteristic}
                </li>
              ))}
            </ul>
            <button className={css.button}>Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
