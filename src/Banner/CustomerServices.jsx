import React from 'react';
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Heading,
  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
  
  export default function CustomerServicesbanner() {
    return (
      <Flex
        w={'full'}
        height={'500px'}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
        }
        backgroundSize={'cover'}
        backgroundRepeat="no-repeat"
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          align="left"
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack  align={'flex-start'} spacing={6}>
            <Heading
              color={'white'}
              fontWeight={900}
              lineHeight={1}
              fontSize={useBreakpointValue({ base: '3xl', md: '120px' })}>
              SIMPLE
            </Heading>
            <Stack direction={'row'} pl="45%">
              <Link
                to="/"
                bg={'blue.400'}
                fontWeight={700}
                rounded={'full'}
                style={{color:'white'}}
                _hover={{ bg: 'blue.500' }}>
                Check Order Now <i className="fa-solid fa-angles-right"></i>
              </Link>
            </Stack>
            <Text
              color={'white'}
              fontWeight={900}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '120px' })}>
              TO ORDER.
            </Text>
          </Stack>
        </VStack>
      </Flex>
    );
  }