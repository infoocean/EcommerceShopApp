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
  Button,
  Flex,
  Spacer,
  Box,
} from '@chakra-ui/react';
import { imagepath } from '../../Path/ServerPath';


export default function Categeries() {

  const[mycatdata , setmycatdata] = useState([]);

  useEffect(() => {
    window.scroll(0,0);
    getAllCategory();
  },[]);

  function getAllCategory () {
    const axios = require('axios');
    const config = {
      method: 'get',
      url: 'https://foodielandnod.herokuapp.com/api/getAllCategory',
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

      //console.log(mycatdata);
      //console.log(typeof(mycatdata));
  };

  return (
    <Container mt={8} mb={8} maxW="6xl">
      <Flex>
        <Box>
          <Text fontSize={{ base: '1xl', sm: '3xl', md: '3xl' }} fontWeight="800">
            Categories 
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Link to="/ShowAllCategories">
            <Button bg="#cceefc" size="lg">
              {' '}
              View All Categories 
            </Button>
          </Link>
        </Box>
      </Flex>
      <SimpleGrid mt={6} mb={6} columns={[4, null, 5]} spacing="25px">
          {mycatdata.slice(0,10).map((value, key) => {
              return (
              <Link  key={key} to={`/ShowCategoriesByRecipes/${value._id}`}>
                <Box
                  key={key}
                  role={'group'}
                  align={'center'}
                  pt={5}
                  w={'200px'}
                  h={'200px'}
                  //bg={useColorModeValue('white', 'gray.800')}
                  boxShadow={'2xl'}
                  rounded={'lg'}
                  pos={'relative'}
                  zIndex={1}
                >
                  <Box
                     w={'200px'}
                     h={'100px'}
                    rounded={'lg'}
                    pos={'relative'}
                    _after={{
                      transition: 'all .3s ease',
                      content: '""',
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
                    <Image w={'150px'}
                     h={'100px'} rounded={'lg'} objectFit={'cover'}  src={imagepath+"/"+value.image}  />
                  </Box>
                  <Stack align={'center'}>
                    <Heading
                      pt={8}
                      fontSize={'1xl'}
                      fontFamily={'body'}
                      fontWeight={700}
                    >
                      {value.categoryName}
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