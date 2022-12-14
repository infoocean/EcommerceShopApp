import React from "react";
import EmailSubscribe from "../../OtherComnponents/EmailSubscription";
import SocialProfileWithImage from "./CarouselSlider";
import Fashionproducts from "./Fashionproducts";
import FilterSec from "./FilterSec";

function FashionPage() {
  return (
    <>
      <FilterSec />
      <SocialProfileWithImage />
      <Fashionproducts />
      <EmailSubscribe />
    </>
  );
}

export default FashionPage;
