import Arrivals from 'components/Arrivals/Arrivals';
import Partners from 'components/Partners/Partners';
import SliderOne from 'components/SliderOne/SliderOne';
import React from 'react';

const Home = () => {
  return (
    <div>
      <SliderOne />
      <Arrivals />
      <Partners />
    </div>
  );
};

export default Home;
