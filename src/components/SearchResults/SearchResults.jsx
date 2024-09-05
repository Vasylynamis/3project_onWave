import React from 'react';
import { useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import css from './SearchResults.module.css';

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

const SearchResults = () => {
  const location = useLocation();
  const { results } = location.state || { results: [] };

  return (
    <div className={css.searchResults}>
      <div className={css.wrapper}>
        {results.length > 0 ? (
          results.map(item => (
            <div className={css.itemDetailsPage} key={item.id}>
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
          ))
        ) : (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
