import React from 'react';
import css from './Arrivals.module.css';
import { Link } from 'react-router-dom';

import SliderTwo from 'components/SliderTwo/SliderTwo';

const Arrivals = () => {
  return (
    <section className={css.arrivals}>
      <div className={css.wrapper}>
        <div className={css.titleWrapper}>
          <h2 className={css.title}>new arrivals</h2>
        </div>
        <SliderTwo />
        <div className={css.button}>
          <Link to="/catalog">View more</Link>
        </div>
      </div>
    </section>
  );
};

export default Arrivals;
