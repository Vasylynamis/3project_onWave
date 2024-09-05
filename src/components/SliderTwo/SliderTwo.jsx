import React, { useState } from 'react';
import Slider from 'react-slick';
import { nanoid } from 'nanoid';
import PrevArrow from 'components/Arrows/PrevArrow';
import NextArrow from 'components/Arrows/NextArrow ';
import css from './SliderTwo.module.css';
import cardsData from '../Card/cardsData.json';
import Card from 'components/Card/Card';

const SliderTwo = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    slidesToShow: 1,
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
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },

      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 3,
          arrows: true,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,

          dots: false,
        },
      },
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 5,
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
        {cardsData.map(card => (
          <Card
            key={nanoid()}
            name={card.name}
            price={card.price}
            images={card.images}
            label={card.label}
            quantity={card.quantity}
          />
        ))}
      </Slider>
    </div>
  );
};

export default SliderTwo;
