import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Flex, Box, Image, Stack, Heading } from "@chakra-ui/react";
import { imagepath } from "../../Path/ServerPath";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function SocialProfileWithImage() {
  const [mycatdata, setmycatdata] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
    getAllCategory();
  }, []);
  function getAllCategory() {
    const axios = require("axios");
    const config = {
      method: "get",
      url: "https://foodielandnod.herokuapp.com/api/getAllCategory",
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
  }

  return (
    <Box position={"relative"} width={"full"} overflow={"hidden"}>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {mycatdata.slice(0, 8).map((value, key) => {
          return (
            <div key={key} style={{ padding: "25px" }}>
              <Box
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
              >
                <Image
                  src={imagepath + "/" + value.image}
                  alt={`Picture of ${value.name}`}
                  roundedTop="lg"
                  width={"full"}
                  height={"200px"}
                />
                <Stack align={"center"}>
                  <Heading
                    pt={5}
                    pb={5}
                    fontSize={"1xl"}
                    fontFamily={"body"}
                    fontWeight={700}
                  >
                    {value.categoryName}
                  </Heading>
                </Stack>
              </Box>
            </div>
          );
        })}
      </Carousel>
    </Box>
  );
}
