import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import { imagepath } from "../../Path/ServerPath";

function Fashionproducts() {
  const [mycatdata, setmycatdata] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
    getAllCategory();
  }, []);

  function getAllCategory() {
    const axios = require("axios");
    const config = {
      method: "get",
      url: "https://foodielandnod.herokuapp.com/api/popularRecipes",
      headers: {},
    };
    axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
        setmycatdata(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(mycatdata);
    //console.log(typeof(mycatdata));
  }
  return (
    <Container mt={12} mb={12} maxW="7xl">
      <MDBRow>
        {mycatdata.slice(0, 8).map((value, key) => {
          return (
            <MDBCol key={key} md="12" lg="3" className="mb-4 mb-lg-0">
              <MDBCard className="mt-4">
                <div className="d-flex justify-content-between p-3">
                  <p className="mb-0">Today's Combo Offer</p>
                  <div
                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style={{ width: "30px", height: "30px" }}
                  >
                    <p className="text-white mb-0 small">x4</p>
                  </div>
                </div>
                <MDBCardImage
                  src={imagepath + "/" + value.recipeId.image}
                  position="top"
                  alt="Laptop"
                  style={{ width: "100%", height: "170px" }}
                  className="p-3"
                />
                <div className="mask p-2">
                  <div class="d-flex justify-content-start align-items-end h-100">
                    <h6>
                      <span className="badge bg-primary ms-2">New</span>
                      <span className="badge bg-success ms-2">Eco</span>
                      <span className="badge bg-danger ms-2">-10%</span>
                      <span className=" ms-2">
                        <i class="fa-regular fa-heart"></i>
                      </span>
                    </h6>
                  </div>
                </div>
                <MDBCardBody>
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        Laptops
                      </a>
                    </p>
                    <p className="small text-danger">
                      <s>$1099</s>
                    </p>
                  </div>

                  <div className="d-flex justify-content-between mb-1">
                    <h5 className="mb-0">HP Notebook</h5>
                    <h5 className="text-dark mb-0">$999</h5>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <h6 className="text-success">Shipping Charge</h6>
                    <h5 className="text-dark mb-0">Free</h5>
                  </div>
                  <div class="d-flex justify-content-between mb-2">
                    <p class="text-muted mb-0">
                      Available: <span class="fw-bold">6</span>
                    </p>
                    <div class="ms-auto text-warning">
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                    </div>
                  </div>
                  <div className="mt-1 mb-0 text-muted small">
                    <span>100% cotton</span>
                    <span className="text-primary"> • </span>
                    <span>Light weight</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Best finish
                      <br />
                    </span>
                  </div>
                  <div className="mb-2 text-muted small">
                    <span>Unique design</span>
                    <span className="text-primary"> • </span>
                    <span>For men</span>
                    <span className="text-primary"> • </span>
                    <span>
                      Casual
                      <br />
                    </span>
                  </div>
                  <div className="d-flex flex-row">
                    <MDBBtn
                      color="primary"
                      rippleColor="dark"
                      className="flex-fill "
                    >
                      <i class="fa-solid fa-cart-plus"></i> Add Cart
                    </MDBBtn>
                    <MDBBtn color="danger" className="flex-fill ms-2">
                      <i class="fas fa-bolt"></i> Buy now
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          );
        })}
      </MDBRow>
    </Container>
  );
}

export default Fashionproducts;
