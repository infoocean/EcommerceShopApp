import { Box, Button, Container,Text,useColorModeValue, FormControl,Stack, Heading, Input, SimpleGrid, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function EmailSubscribe() {
  return (
    <Box maxW={'9xl'} mt={8} mb={8}>
        <Container maxW={'6xl'}>
            <SimpleGrid columns={[1, null, 2]} spacing='40px'>
            <Box pr={10} borderRight={'2px solid gray'}>
                <Stack>
                    <Heading fontSize={'2xl'}>Subscribe to our Newsletter</Heading>
                </Stack>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    as={'form'}
                    spacing={'12px'}
                    pt={5}
                >
                <FormControl>
                    <Input
                    variant={'solid'}
                    borderWidth={1}
                    color={'gray.800'}
                    _placeholder={{
                        color: 'gray.400',
                    }}
                    borderColor={useColorModeValue('gray.300', 'gray.700')}
                    id={'email'}
                    type={'email'}
                    required
                    placeholder={'Your Email'}
                    aria-label={'Your Email'}
                    //value={email}
                    />
                </FormControl>
                <FormControl w={{ base: '100%', md: '40%' }}>
                    <Button
                     colorScheme='green'
                     w="100%">submit
                    </Button>
                </FormControl>
                </Stack>
            </Box>
            <Box >
                <Stack>
                    <Text>In publishing and graphic design, Lorem ipsum is
                     a placeholder text commonly used to demonstrate the visual 
                     form of a document or a typeface without relying on meaningful content. 
                     Lorem ipsum may be used as a placeholder before final copy is available <Text as='span' style={{ color: 'blue'}}><u> Learn More About</u></Text></Text>
                </Stack>
            </Box>
            </SimpleGrid>
        </Container>
    </Box>
  );
}

export default EmailSubscribe;

