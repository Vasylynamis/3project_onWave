import React, { useState, useMemo } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import css from './SliderOne.module.css';

import header_mobile1 from '../../images/header/header_mob1.webp';
import header_mobile1_2x from '../../images/header/header_mob1@2x.webp';
import header_tablet1 from '../../images/header/header_tablet1.webp';
import header_tablet_2x from '../../images/header/header_tablet1@2x.webp';
import header_desc1 from '../../images/header/header_desc1.webp';
import header_desc1_2x from '../../images/header/header_desc1@2x.webp';

import header_mobile2 from '../../images/header/header_mob2.webp';
import header_mobile2_2x from '../../images/header/header_mob2@2x.webp';
import header_tablet2 from '../../images/header/header_tablet2.webp';
import header_tablet2_2x from '../../images/header/header_tablet2@2x.webp';
import header_desc2 from '../../images/header/header_desc2.webp';
import header_desc2_2x from '../../images/header/header_desc2@2x.webp';

import header_mobile3 from '../../images/header/header_mob3.webp';
import header_mobile3_2x from '../../images/header/header_mob3@2x.webp';
import header_tablet3 from '../../images/header/header_tablet3.webp';
import header_tablet3_2x from '../../images/header/header_tablet3@2x.webp';
import header_desc3 from '../../images/header/header_desc3.webp';
import header_desc3_2x from '../../images/header/header_desc3@2x.webp';

const SliderOne = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = useMemo(
    () => ({
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
          aria-label="next slide"
          className={`${css.customDot} ${
            i === activeSlide ? css.customDotActive : ''
          }`}
        ></button>
      ),
    }),
    [activeSlide]
  );

  return (
    <div className={css.sliderWrapper}>
      <Slider {...settings}>
        <div className={css.wrapper}>
          <picture>
            <source
              loading="lazy"
              fetchpriority="low"
              decoding="async"
              width="1440"
              height="700"
              className={css.headerImg}
              media="(min-width:1440px)"
              srcSet={`${header_desc1} 1x, ${header_desc1_2x} 2x`}
            />
            <source
              loading="lazy"
              fetchpriority="low"
              decoding="async"
              width="768"
              height="380"
              className={css.headerImg}
              media="(min-width:768px)"
              srcSet={`${header_tablet1} 1x, ${header_tablet_2x} 2x`}
            />
            <img
              loading="eager"
              fetchpriority="high"
              decoding="async"
              width="320"
              height="384"
              className={css.headerImg}
              srcSet={`${header_mobile1} 1x, ${header_mobile1_2x} 2x`}
              alt="header"
            />
          </picture>
          <div className={css.wrapperContent}>
            <div className={css.content}>
              <div className={css.title}>
                <p>Find your own style</p>
              </div>
              <button className={css.button}>
                <Link to="/catalog">View more</Link>
              </button>
            </div>
          </div>
        </div>
        <div className={css.wrapper}>
          <picture>
            <source
              loading="lazy"
              fetchpriority="low"
              decoding="async"
              width="1440"
              height="700"
              className={css.headerImg}
              media="(min-width:1440px)"
              srcSet={`${header_desc2} 1x, ${header_desc2_2x} 2x`}
            />
            <source
              loading="lazy"
              fetchpriority="low"
              decoding="async"
              width="768"
              height="380"
              className={css.headerImg}
              media="(min-width:768px)"
              srcSet={`${header_tablet2} 1x, ${header_tablet2_2x} 2x`}
            />
            <img
              loading="lazy"
              fetchpriority="low"
              decoding="async"
              width="320"
              height="384"
              className={css.headerImg}
              srcSet={`${header_mobile2} 1x, ${header_mobile2_2x} 2x`}
              alt="header"
            />
          </picture>
          <div className={css.wrapperContent}>
            <div className={css.content}>
              <div className={css.title}>
                <p>Find your own style</p>
              </div>
              <button className={css.button}>
                <Link to="/catalog">View more</Link>
              </button>
            </div>
          </div>
        </div>
        <div className={css.wrapper}>
          <picture>
            <source
              loading="lazy"
              fetchpriority="low"
              decoding="async"
              width="1440"
              height="700"
              className={css.headerImg}
              media="(min-width:1440px)"
              srcSet={`${header_desc3} 1x, ${header_desc3_2x} 2x`}
            />
            <source
              loading="lazy"
              fetchpriority="low"
              decoding="async"
              width="768"
              height="380"
              className={css.headerImg}
              media="(min-width:768px)"
              srcSet={`${header_tablet3} 1x, ${header_tablet3_2x} 2x`}
            />
            <img
              loading="lazy"
              fetchpriority="low"
              decoding="async"
              width="320"
              height="384"
              className={css.headerImg}
              srcSet={`${header_mobile3} 1x, ${header_mobile3_2x} 2x`}
              alt="header"
            />
          </picture>
          <div className={css.wrapperContent}>
            <div className={css.content}>
              <div className={css.title}>
                <p>Find your own style</p>
              </div>
              <button className={css.button}>
                <Link to="/catalog">View more</Link>
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default React.memo(SliderOne);
