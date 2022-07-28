import React from 'react';
import CustomerServicesbanner from '../../Banner/CustomerServices';
import HomePagebanner from '../../Banner/HomeBaner';
import CarouselSlider from '../../CarouselSlider/HomeCarouselSlider';
function HomePage() {
  return (
    <>
    <CarouselSlider/>
    <HomePagebanner/>
    <CustomerServicesbanner/>
    </>
  );
}

export default HomePage;
