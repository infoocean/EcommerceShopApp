import React from 'react';
import EmailSubscribe from '../../OtherComnponents/EmailSubscription';
import Categeries from './Categories';
import FilterSection from './FilterOptionSec';
import Partnershipsec from './PartnerSec';
import PopularProducts from './PopularProduct';

function ShopPage() {
  return (
    <>
    <FilterSection/>
    <Categeries/>
    <PopularProducts/>
    <Partnershipsec/>
    <EmailSubscribe/>
    </>
  );
}

export default ShopPage;
