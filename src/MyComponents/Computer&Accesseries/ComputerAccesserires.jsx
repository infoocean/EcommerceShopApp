import React from "react";
import EmailSubscribe from "../../OtherComnponents/EmailSubscription";
import SocialProfileWithImage from "./CarouselSlider";
import ComputerAcceseriesProducts from "./ComputerAcceseriesProducts";
import FilterSection from "./FilterSec";

function ComputerAcceseries() {
  return (
    <>
      <FilterSection />
      <SocialProfileWithImage />
      <ComputerAcceseriesProducts />
      <EmailSubscribe />
    </>
  );
}

export default ComputerAcceseries;
