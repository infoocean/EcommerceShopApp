import { Container } from '@chakra-ui/react';
import React from 'react';

function AdvertisementBanner() {
  return (
    <>
    <Container mt={8} mb={8} maxW="6xl" >
        <section className="hero-banner p-5" style={{backgroundColor:'#080808',borderRadius:'30px'}}>
        <div className="container">
            <div className="row row align-items-center">
                <div className="col-lg-5 offset-lg-1 order-lg-1">
                    <img style={{borderRadius:'20px'}} src="https://scitechdaily.com/images/New-Hubble-Image-Shows-Part-of-the-Large-Magellanic-Cloud.jpg" className="img-fluid" alt="Web Development"/>
                </div>
                <div className="col-lg-6">
                    <h1 className="pt-2">Web Designing & Development</h1>
                    <p className="lead  py-3">It is a long established fact that a reader will.</p>
                    <a href="#" className="btn btn-outline-white btn-lg">Order Now</a>
                </div>
            </div>
        </div>
        </section>
    </Container>
    </>
  );
}

export default AdvertisementBanner;
