import React from 'react';
import {
    Container,
    Flex,
    Box,
    Text,
    Button,
    VStack,
    HStack,
    Wrap,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Heading,
  } from '@chakra-ui/react';
import {MdOutlineEmail, MdLockOutline} from 'react-icons/md';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { Center} from '@chakra-ui/react';
  
  export default function LoginForm() {
    return (
      <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            color="white"
            borderRadius="lg">
            <Box p={5}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} pb={5} color="#0B0E3F">
                    <Heading>
                      <Center fontSize={'20px'} pb={5}>
                        Login Form
                      </Center>
                    </Heading>
                    <VStack spacing={5}>
                      <Formik
                        const initialValues={{
                          email: "",
                          password:""
                        }}
                        validate={(values) => {
                          const errors = {};

                          if (!values.email) {
                            errors.email = "** Email Feild Required";
                          } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                              values.email
                            )
                          ) {
                            errors.email = "** Invalid email address";
                          }

                          if (values.password.trim() === "") {
                            errors.password = "** password Required";
                          } 

                          return errors;
                        }}
                        
                      
                        // onSubmit = {(values, { setSubmitting }) => {
                        //   setTimeout(() => {
                        //     alert(JSON.stringify(values, null, 2));
                        //     const formdata = JSON.stringify(values, null, 2);
                        //     //alert(formdata);
                        //     fetch("https://foodielandnod.herokuapp.com/api/addContactDetails",
                        //       {
                        //         method: "POST",
                        //         headers: {
                        //           Accept: "application/json",
                        //           "Content-Type": "application/json",
                        //         },
                        //         body: 
                        //           formdata,
                        //       }).then(function(response) {
                        //         console.log(response);
                        //         if(response.status===200) {
                        //           //console.log("success");
                        //           alert("data submitted successfully");
                        //         }else{
                        //           alert("email allready exists");
                        //           //resetForm(values) ;
                        //         }
                        //     });
                        //     setSubmitting(false);
                        //   }, 400);
                        // }}
                        

                        onSubmit={(values) => {
                          alert(JSON.stringify(values, null, 2));
                        }}
                      >
                        {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                        }) => (
                          <form onSubmit={handleSubmit}>
                            <HStack align="flex-start">
                                <FormControl>
                                    <FormLabel mb={0} pb={0} htmlFor="email">Email Id</FormLabel>
                                        <InputGroup borderColor="#E0E1E7">
                                            <InputLeftElement
                                                pointerEvents="none"
                                                children={<MdOutlineEmail color="gray.800" />}
                                            />
                                            <Input 
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Enter your email"
                                                size="md"
                                                variant="filled"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur} 
                                            />
                                        </InputGroup>
                                        <Text color={"red"} fontSize={"sm"}>
                                            {errors.email && touched.email && errors.email}
                                        </Text>
                                </FormControl>
                            </HStack>
                            <HStack align="flex-start" mt={'15px'}>
                                <FormControl>
                                        <FormLabel mb={0} pb={0}  htmlFor="password">Password</FormLabel>
                                            <InputGroup borderColor="#E0E1E7">
                                                <InputLeftElement
                                                    pointerEvents="none"
                                                    children={<MdLockOutline color="gray.800" />}
                                                />
                                                <Input 
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    placeholder="Enter Your password"
                                                    size="md"
                                                    variant="filled"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur} 
                                                />
                                            </InputGroup>
                                            <Text color={"red"} fontSize={"sm"}>
                                                {errors.password && touched.password && errors.password}
                                            </Text>
                                </FormControl>
                            </HStack>
                            <HStack mt={'20px'}>
                              <Button
                                type="submit"
                                colorScheme="blue"
                                width="full"
                                disabled={isSubmitting}
                              >
                                Submit
                              </Button>
                            </HStack>
                          </form>
                        )}
                      </Formik>
                    </VStack>
                    {/* <HStack mt={'5px'}>
                      <Link to="/signupform"><Text style={{ color: 'lightblue'}}><u>Forgot Password</u></Text></Link>
                    </HStack> */}
                    <HStack mt={'7px'}>
                      <Text>Don't have An Account? </Text>
                      <Link to="/signupform"><Text style={{ color: 'blue'}}>SignUp</Text></Link>
                    </HStack>
                  </Box>
                </Box>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }