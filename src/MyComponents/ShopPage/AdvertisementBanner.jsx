import { Container } from '@chakra-ui/react';
import React from 'react';

function AdvertisementBanner() {
  return (
    <>
    <Container mt={8} mb={8} maxW="6xl" >
        <section class="hero-banner p-5" style={{backgroundColor:'#080808',borderRadius:'30px'}}>
        <div class="container">
            <div class="row row align-items-center">
                <div class="col-lg-5 offset-lg-1 order-lg-1">
                    <img style={{borderRadius:'20px'}} src="https://scitechdaily.com/images/New-Hubble-Image-Shows-Part-of-the-Large-Magellanic-Cloud.jpg" class="img-fluid" alt="Web Development"/>
                </div>
                <div class="col-lg-6">
                    <h1 class="pt-2">Web Designing & Development</h1>
                    <p class="lead  py-3">It is a long established fact that a reader will.</p>
                    <a href="#" class="btn btn-outline-white btn-lg">Order Now</a>
                </div>
            </div>
        </div>
        </section>
    </Container>
    </>
  );
}

export default AdvertisementBanner;
