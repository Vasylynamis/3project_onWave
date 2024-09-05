import React from 'react';
import css from './OllNews.module.css';

const OllNews = () => {
  return (
    <div className={css.ollNews}>
      <div className="container">
        <div className={css.wrapper}>
          <div className={css.newsBlock}>
            <p className={css.title}>
              Which guitar to choose: classical, acoustic, electric, bass?
            </p>
            <p className={css.description}>
              The world of musical instruments is vast and vast. Even the most
              experienced multi-instrumentalist owns no more than 20% existing
              tools in the world. To date, the main thing is not quantity, and
              quality: the quality of instruments, the quality of playing them.
              We someday we will talk with you about the tools of the peoples of
              the extreme north, and about the oddities of sound production in
              African settlements, and even about stringed instruments made of
              genuine leather with goat gut strings. But today we will talk
              about more standard and usual for all instruments - about guitars.
            </p>
          </div>
          <div className={css.newsBlock}>
            <p className={css.title}>How to tune a guitar?</p>
            <p className={css.description}>
              Not so long ago, we added our products to the range of our
              products musical instruments online store. One of the most widely
              presented is a guitar. In this review, we will try to answer
              questions that interest beginner guitarists: Why the guitar builds
              quickly? Is it possible to learn how to configure it in any
              situation? Where to get the necessary tools or you can tune the
              guitar without special tools?
            </p>
          </div>
          <div className={css.newsBlock}>
            <p className={css.title}>
              Which guitar to buy and where is better in a store or online?
            </p>
            <p className={css.description}>
              The guitar is one of the most popular musical instruments in the
              world, without which practically no concert, be it rock, pop,
              blues, country, romance or classical music. Frontmen of the
              majority musical groups are guitarists, and many iconic
              personalities from the world of music was remembered by us
              precisely because of mastery this musical instrument.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OllNews;
