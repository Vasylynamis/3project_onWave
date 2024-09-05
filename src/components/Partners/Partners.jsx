import React from 'react';
import css from './Partners.module.css';
import SliderThree from 'components/SliderThree/SliderThree';

const Partners = () => {
  return (
    <section className={css.partners}>
      <div className={css.wrapper}>
        <h2 className={css.title}>our partners</h2>
        <SliderThree />
      </div>
    </section>
  );
};

export default Partners;
