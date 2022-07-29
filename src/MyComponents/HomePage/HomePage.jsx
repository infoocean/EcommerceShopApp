import React from 'react';
import CustomerServicesbanner from '../../Banner/CustomerServices';
import HomePagebanner from '../../Banner/HomeBaner';
import CarouselSlider from '../../CarouselSlider/HomeCarouselSlider';
import EmailSubscribe from '../../OtherComnponents/EmailSubscription';
function HomePage() {
  return (
    <>
    <CarouselSlider/>
    <HomePagebanner/>
    <CustomerServicesbanner/>
    <EmailSubscribe/>
    </>
  );
}

export default HomePage;
