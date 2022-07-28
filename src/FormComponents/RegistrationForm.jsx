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
  } from '@chakra-ui/react';
import {MdPhone,MdOutlineEmail,MdLockOutline} from 'react-icons/md';
import {BsPerson } from 'react-icons/bs';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
  
export default function SignUpForm() {
    return (
      <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            color="white"
            borderRadius="lg">
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <Formik
                        const initialValues={{
                          name:'',
                          email: "",
                          number:'',
                          password:""
                        }}
                        
                        validate={(values) => {
                          const errors = {};
                          
                          if (values.name.trim() === "") {
                            errors.name = "** Name Feild Required";
                          } 

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

                          if (values.number.trim() === "") {
                            errors.number = "** number Required";
                          } 

                          return errors;
                        }}

                        // onSubmit={(values, { setSubmitting }, event) => {
                        //   setTimeout(() => {
                        //     //alert(JSON.stringify(values, null, 2));
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

                        //     //event.preventDefault();
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
                          <HStack align="flex-start" mt={'5px'}>
                                <FormControl>
                                    <FormLabel htmlFor="username">User Name</FormLabel>
                                        <InputGroup borderColor="#E0E1E7">
                                            <InputLeftElement
                                                pointerEvents="none"
                                                children={<BsPerson color="gray.800" />}
                                            />
                                            <Input 
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Enter your name"
                                                size="md"
                                                variant="filled"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur} 
                                            />
                                        </InputGroup>
                                        <Text color={"red"} fontSize={"sm"}>
                                            {errors.name && touched.name && errors.name}
                                        </Text>
                                </FormControl>
                            </HStack>
                            <HStack align="flex-start" mt={'20px'}>
                                <FormControl>
                                  <FormLabel htmlFor="email">Email Address</FormLabel>
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
                            <HStack align="flex-start" mt={'20px'}>
                                <FormControl>
                                  <FormLabel htmlFor="number">Mobile Number</FormLabel>
                                        <InputGroup borderColor="#E0E1E7">
                                            <InputLeftElement
                                                pointerEvents="none"
                                                children={<MdPhone color="gray.800" />}
                                            />
                                            <Input 
                                                type="text"
                                                name="number"
                                                id="number"
                                                placeholder="Enter your number"
                                                size="md"
                                                variant="filled"
                                                value={values.number}
                                                onChange={handleChange}
                                                onBlur={handleBlur} 
                                            />
                                        </InputGroup>
                                        <Text color={"red"} fontSize={"sm"}>
                                            {errors.number && touched.number && errors.number}
                                        </Text>
                                </FormControl>
                            </HStack>
                            <HStack align="flex-start" mt={'20px'}>
                                <FormControl>
                                        <FormLabel htmlFor="password">Password</FormLabel>
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
                    <HStack mt={'5px'}>
                      <Text>Allready have An Account? </Text>
                      <Link style={{ color: 'blue'}} to="/loginform">Login</Link>
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