import React from "react";
import { Box, Button, Flex, Text, useToast, Image } from "@chakra-ui/react";

import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
export const RecentView = () => {
  return (
    <>
      <Box marginTop={"39.5"} paddingLeft={20} paddingRight={20}>
        <Text
          fontSize={15}
          fontWeight={"bold"}
          paddingLeft={"30"}
        //   border={"1px solid red"}
          textAlign={"left"}
        >
          RECENTLY VIEWED
        </Text>

        <Flex height={"350px"}>
          <Box margin={5} width={"25%"}>
            <Image
              objectFit="cover"
              src="https://images.bewakoof.com/t640/men-s-black-fist-of-khonshu-graphic-printed-oversized-t-shirt-559357-1670598541-1.jpg"
              alt="Dan Abramov"
            />
            <Button
              h={5}
              borderRadius={0}
              fontSize={10}
              position={"absolute"}
              left={20}
              top={1000}
              leftIcon={<FaStar color={"yellow"} />}
            >
              4.5
            </Button>
            <Flex alignItems={"center"} marginTop={"10px"} gap={"10px"}>
              <Text fontSize={"15px"} fontWeight={"500"}>
                Rs.{456}
              </Text>
              <Text
                textDecoration={"line-through"}
                fontSize={"10px"}
                color={"RGBA(0, 0, 0, 0.48)"}
              >
                {909}Rs.
              </Text>
              
            </Flex>
          </Box>
          <Box margin={5} width={"25%"}>
            <Image
              objectFit="cover"
              src="https://images.bewakoof.com/t640/men-s-green-what-s-up-doc-graphic-printed-oversized-t-shirt-559367-1670603995-1.jpg"
              alt="Dan Abramov"
            />
            <Button
              h={5}
              borderRadius={0}
              fontSize={10}
              position={"absolute"}
              left={360}
              top={1000}
              leftIcon={<FaStar color={"yellow"} />}
            >
              4.5
            </Button>
            <Flex alignItems={"center"} marginTop={"10px"} gap={"10px"}>
              <Text fontSize={"15px"} fontWeight={"500"}>
                Rs.{500}
              </Text>
              <Text
                textDecoration={"line-through"}
                fontSize={"10px"}
                color={"RGBA(0, 0, 0, 0.48)"}
              >
                {900}Rs.
              </Text>
              
            </Flex>
          </Box>

          <Box margin={5} width={"25%"}>
            <Image
              //   boxSize="100px"
              objectFit="cover"
              src="https://images.bewakoof.com/t640/unisex-lemon-drop-minions-looking-cute-might-skate-later-printed-t-shirt-546408-1669815760-1.jpg"
              alt="Dan Abramov"
            />
            <Button
              h={5}
              borderRadius={0}
              fontSize={10}
              position={"absolute"}
              left={660}
              top={1000}
              leftIcon={<FaStar color={"yellow"} />}
            >
              4.5
            </Button>
            <Flex alignItems={"center"} marginTop={"10px"} gap={"10px"}>
              <Text fontSize={"15px"} fontWeight={"500"}>
                Rs.{600}
              </Text>
              <Text
                textDecoration={"line-through"}
                fontSize={"10px"}
                color={"RGBA(0, 0, 0, 0.48)"}
              >
                {1000}Rs.
              </Text>
              
            </Flex>
          </Box>
          <Box margin={5} width={"25%"}>
            <Image
              width={"100%"}
              //   boxSize="100px"
              objectFit="cover"
              src="https://images.bewakoof.com/t640/men-s-green-yeh-dil-maange-more-t-shirt-391624-1655810624-1.jpg"
              alt="Dan Abramov"
            />
            <Button
              h={5}
              borderRadius={0}
              fontSize={10}
              position={"absolute"}
              left={950}
              top={1000}
              leftIcon={<FaStar color={"yellow"} />}
            >
              4.5
            </Button>
            <Flex alignItems={"center"} marginTop={"10px"} gap={"10px"}>
              <Text fontSize={"15px"} fontWeight={"500"}>
                Rs.{1500}
              </Text>
              <Text
                textDecoration={"line-through"}
                fontSize={"10px"}
                color={"RGBA(0, 0, 0, 0.48)"}
              >
                {2400}Rs.
              </Text>
              
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
