

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './CatalogItems.module.css';
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

const getImagePath = path => images[path];

const CatalogItems = ({ searchQuery }) => {
  const [filteredItems, setFilteredItems] = useState(itemsData);

  useEffect(() => {
    if (searchQuery) {
      const filtered = itemsData.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      setFilteredItems(itemsData);
    }
  }, [searchQuery]);

  return (
    <section className={css.catalog}>
      <div className="container">
        {filteredItems.length > 0 ? (
          <div className={css.wrapper}>
            {filteredItems.map(item => {
              const isSoldOut = item.quantity === 0;
              const label = isSoldOut ? 'Sold Out' : 'In Stock';

              return (
                <div
                  key={item.id}
                  className={`${css.item} ${isSoldOut ? css.soldOut : ''}`}
                >
                  <div
                    className={`${css.label} ${
                      isSoldOut ? css.soldOutLabel : ''
                    }`}
                  >
                    <span>{label}</span>
                  </div>
                  <Link className={css.itemLink} to={`/catalog/${item.id}`} />
                  <img
                    className={css.itemImage}
                    srcSet={`${getImagePath(
                      item.images['1x']
                    )} 1x, ${getImagePath(
                      item.images['2x']
                    )} 2x, ${getImagePath(item.images['3x'])} 3x`}
                    src={getImagePath(item.images['1x'])}
                    alt={item.name}
                    width="200"
                    height="370"
                  />
                  <div className={css.itemDetails}>
                    <h2 className={css.itemName}>{item.name}</h2>
                    <p className={css.itemPrice}>{item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className={css.noResults}>
            No items found for "<strong>{searchQuery}</strong>"
          </p>
        )}
      </div>
    </section>
  );
};

export default CatalogItems;
