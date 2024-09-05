import React, { useState } from 'react';
import Slider from 'react-slick';
import css from './SliderThree.module.css';
import NextArrow from 'components/Arrows/NextArrow ';
import PrevArrow from 'components/Arrows/PrevArrow';

import epiphone from '../../images/partners/epiphone.svg';
import esp from '../../images/partners/esp.svg';
import gibson from '../../images/partners/gibson.svg';
import engl from '../../images/partners/engl.svg';
import roland from '../../images/partners/roland.svg';
import fender from '../../images/partners/fender.svg';
import peavey from '../../images/partners/peavey.svg';
import marshal from '../../images/partners/marshal.svg';
import orange from '../../images/partners/orange.svg';

const SliderThree = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,

    dotsClass: css.customDots,
    beforeChange: (current, next) => setActiveSlide(next),
    customPaging: i => (
      <button
        aria-label="Следующий слайд"
        className={`${css.customDot} ${
          i === activeSlide ? css.customDotActive : ''
        }`}
      ></button>
    ),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },

      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 6,
          arrows: true,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,

          dots: false,
        },
      },
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 9,
          arrows: true,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className={css.sliderContainer}>
      <Slider {...settings}>
        <div className={css.imageContainer}>
          <a href="https://epiphone.muzline.ua/gytary/" target="blank">
            <img
              className={css.partnersImage}
              src={epiphone}
              alt="epiphione"
              width="100"
              height="35"
              loading="lazy"
              fetchpriority="low"
              decoding="async"
            />
          </a>
        </div>
        <div className={css.imageContainer}>
          <a href="https://www.espguitars.ru/" target="blank">
            <img
              className={css.partnersImage}
              src={esp}
              alt="esp"
              width="100"
              height="43"
              loading="lazy"
              fetchpriority="low"
              decoding="async"
            />
          </a>
        </div>
        <div className={css.imageContainer}>
          <a href="https://gibson.muzline.ua/gytary/" target="blank">
            <img
              className={css.partnersImage}
              src={gibson}
              alt="gibson"
              width="100"
              height="64"
              loading="lazy"
              fetchpriority="low"
              decoding="async"
            />
          </a>
        </div>
        <div className={css.imageContainer}>
          <a href="https://www.engl-amps.com/" target="blank">
            <img
              className={css.partnersImage}
              src={engl}
              alt="engl"
              width="100"
              height="34"
              loading="lazy"
              fetchpriority="low"
              decoding="async"
            />
          </a>
        </div>
        <div className={css.imageContainer}>
          <a href="https://www.roland.com/ru/" target="blank">
            <img
              className={css.partnersImage}
              src={roland}
              alt="roland"
              width="100"
              height="15"
              loading="lazy"
              fetchpriority="low"
              decoding="async"
            />
          </a>
        </div>
        <div className={css.imageContainer}>
          <a href="https://www.fender.com/en/start" target="blank">
            <img
              className={css.partnersImage}
              src={fender}
              alt="fender"
              width="100"
              height="66"
              loading="lazy"
              fetchpriority="low"
              decoding="async"
            />
          </a>
        </div>
        <div className={css.imageContainer}>
          <a href="https://peavey.muzline.ua/" target="blank">
            <img
              className={css.partnersImage}
              src={peavey}
              alt="peavey"
              width="100"
              height="60"
              loading="lazy"
              fetchpriority="low"
              decoding="async"
            />
          </a>
        </div>
        <div className={css.imageContainer}>
          <a href="https://marshall.com.ua/ru/" target="blank">
            <img
              className={css.partnersImage}
              src={marshal}
              alt="marshal"
              width="100"
              height="26"
              loading="lazy"
              fetchpriority="low"
              decoding="async"
            />
          </a>
        </div>
        <div className={css.imageContainer}>
          <a href="https://orangeamps.com.ua/" target="blank">
            <img
              className={css.partnersImage}
              src={orange}
              alt="orange"
              width="100"
              height="29"
              loading="lazy"
              fetchpriority="low"
              decoding="async"
            />
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default SliderThree;
