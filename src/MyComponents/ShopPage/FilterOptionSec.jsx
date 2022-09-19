import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    chakra,
    Container,
    Input,
    InputGroup,
    InputRightElement,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';
import { ChevronRightIcon } from '@chakra-ui/icons';

  export default function FilterSection() {
    return (
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
          >
            <Stack>
                <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>About</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
                </BreadcrumbItem>
                </Breadcrumb>
            </Stack>
            <Stack align={'center'}>
              <InputGroup w={{ base: '100px', sm: '300px', md: "500px" }}> 
              <Input
                type={'text'}
                name="search"
                //value={Search}
                //onChange={handlesearch}
                placeholder={'search Product ...'}
                size='sm'
                color={useColorModeValue('gray.800', 'gray.200')}
                bg={useColorModeValue('gray.100', 'gray.600')}
                rounded={'full'}
              />
              <InputRightElement width={'7rem'} pb={'9px'} >
              <Button //onClick={Searchsubmit} 
                px={10}
                type="submit"
                size='sm'
                name="submit"
                rounded={'full'}
                bg={useColorModeValue('#151f21', 'gray.900')}
                color={'white'} _hover={{ bg: 'red.500' }}>
                Search
              </Button>
              </InputRightElement>
              </InputGroup>
            </Stack>
            <Stack direction={'row'}>
              <i className="fa-solid fa-filter"></i>
              <Text as='a' fontSize={'12px'} href='#'><u>Filter</u></Text>
            </Stack>
        </Container>
    );
  }