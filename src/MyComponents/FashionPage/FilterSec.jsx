import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
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
          <Stack direction={'row'}>
            <i className="fa-solid fa-filter"></i>
            <Text as='a' fontSize={'12px'} href='#'><u>Filter</u></Text>
          </Stack>
      </Container>
  );
}