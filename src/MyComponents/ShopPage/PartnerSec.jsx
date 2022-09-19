import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Text,
  Container,
  useColorModeValue,
  Heading,
  Stack,
  Image,
  SimpleGrid,
  image,
  Button,
  Flex,
  Spacer,
  Box,
} from '@chakra-ui/react';
import { imagepath } from '../../Path/ServerPath';

export default function Partnershipsec() {

  const[mycatdata , setmycatdata] = useState([]);

  useEffect(() => {
    window.scroll(0,0);
    getAllCategory();
  },[]);

  function getAllCategory () {
    const axios = require('axios');
    const config = {
      method: 'get',
      url: 'https://foodielandnod.herokuapp.com/api/popularRecipes',
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
  };

  return (
    <Container mt={12} mb={12} maxW="6xl">
      <Flex>
        <Box>
          <Text fontSize={{ base: '1xl', sm: '3xl', md: '3xl' }} fontWeight="800">
            Our Partnership
          </Text>
        </Box>
      </Flex>
      <section id="clients" className="section-bg">
        <div className="row no-gutters clients-wrap clearfix wow fadeInUp">
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                    <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460224/cropped-cropped-20170720-lucuLogo-squ2-e1500543540803.png" className="img-fluid" alt=""/>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                    <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460269/104840a62d46c05d285762857fecb61a.png" className="img-fluid" alt=""/>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                    <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460398/client-6.png" className="img-fluid" alt=""/>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
                <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460418/client-7.png" className="img-fluid" alt=""/>
            </div>
            </div>
        </div>
        <div className="row no-gutters clients-wrap clearfix wow fadeInUp pt-5">
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                    <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460224/cropped-cropped-20170720-lucuLogo-squ2-e1500543540803.png" class="img-fluid" alt=""/>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                    <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460269/104840a62d46c05d285762857fecb61a.png" className="img-fluid" alt=""/>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
                <div className="client-logo">
                    <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460398/client-6.png" className="img-fluid" alt=""/>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6">
            <div className="client-logo">
                <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460418/client-7.png" className="img-fluid" alt=""/>
            </div>
            </div>
        </div>
      </section>
    </Container>
  );
}
