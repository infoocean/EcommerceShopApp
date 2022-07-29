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

export default function PopularProducts() {

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
    <Container mt={12} mb={8} maxW="6xl">
      <Flex>
        <Box>
          <Text fontSize={{ base: '1xl', sm: '3xl', md: '3xl' }} fontWeight="800">
            Popular Products
          </Text>
        </Box>
      </Flex>
      <SimpleGrid mt={6} mb={6} columns={[2, null, 5]} spacing="25px">
          {mycatdata && mycatdata.slice(0,5).map((value, key) => {
              return (
              <Link  key={key} to={`/ShowCategoriesByRecipes/${value._id}`}>
                <Box 
                    id={key}
                    rounded="lg"
                    position="relative"
                    role={'group'}
                    w={'full'}
                    h="200px"
                    boxShadow={'2xl'}
                    pos={'relative'}
                    zIndex={1}
                    bg={'gray.100'}
                >
                <Box  
                  rounded={'lg'}
                  p={5}
                  pos={'relative'}
                  _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    filter: 'blur(15px)',
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: 'blur(20px)',
                    },
                  }} 
                  > 
                  <Image h="110px" objectFit={'cover'} w='full' src={imagepath + "/" + value.recipeId.image}   layout={'fill'} />
                </Box>
                <Stack align={'center'}>
                    <Heading
                      pt={1}
                      fontSize={'1xl'}
                      fontFamily={'body'}
                      fontWeight={700}
                    >
                      {value.recipeId.status}
                    </Heading>
                  </Stack>
              </Box>
            </Link>
            );
        })}
      </SimpleGrid>
    </Container>
  );
}