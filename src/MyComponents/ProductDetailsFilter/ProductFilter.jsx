import { Box } from "@chakra-ui/react";
import React from "react";

function ProdyctFilter() {
  return (
    <Box maxW={"7xl"} mt={8} mb={8}>
      <div className="productfiltercard">
        <div className="row">
          <div className="col-lg-4">
            <div className="left">
              <img
                src="https://www.dropbox.com/s/e928cht0h5crcn4/shoe.png?raw=1"
                alt="shoe"
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="right">
              <div className="product-info">
                <div className="product-name">
                  <h1>Airmax</h1>
                </div>
                <div className="details">
                  <h3>Winter Collection</h3>
                  <h2>Men Black Sneakers</h2>
                  <h4>
                    <span className="fa fa-dollar"></span>150
                  </h4>
                  <h4 className="dis">
                    <span className="fa fa-dollar"></span>200
                  </h4>
                </div>
                <ul>
                  <li>SIZE</li>
                  <li className="bg">1</li>
                  <li className="bg">2</li>
                  <li className="bg">3</li>
                  <li className="bg">4</li>
                  <li className="bg">5</li>
                </ul>
                <ul>
                  <li>COLOR</li>
                  <li className="yellow"></li>
                  <li className="black"></li>
                  <li className="blue"></li>
                </ul>
                <span className="foot">
                  <i className="fa fa-shopping-bag"></i>Buy Now
                </span>
                <span className="foot">
                  <i className="fa fa-shopping-cart"></i>Add TO Cart
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default ProdyctFilter;
