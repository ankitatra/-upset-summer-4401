import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  HStack,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useState } from "react";

const Signup = () => {

  // const [input, setInput] = useState("");
  // const handleInputChange = (e) => setInput(e.target.value);
  // const isError = input === "";

  return (
    <Flex>
      <Box w="50%" h="100vh" bgGradient="linear(to-t, yellow.100, white)">
        <Text fontSize={{ base: "15px", md: "40px", lg: "40px" }} as="b">
          Welcome to the world of Fashion Store!
        </Text>
        <Image
          m={{ base: "50vh 0 0 0", md: "0", lg: "0" }}
          src="https://images.bewakoof.com/web/group-19-1617704502.png"
        />
      </Box>
      <Flex direction={"column"} align="center" justifyContent="center" w="50%">
        <FormControl w="80%" textAlign="center">
          <Text fontSize="25px" as="b">
            Log in / Sign up
          </Text>
          <Text color={"grey"}>
            for Latest trends, exciting offers and everything Fashion Store!
          </Text>
          <Input
            type="number"
            placeholder="Enter Mobile Number"
            mt={4}
            w="80%"
            h={"50px"}
            fontSize="15px"
            // value={input}
            // onChange={handleInputChange}
          />
          <Button
            fontSize="20px"
            mt={4}
            w="80%"
            h={"50px"}
            colorScheme="teal"
            type="submit"
          >
            CONTINUE
          </Button>
        </FormControl>
        <HStack w="80%" mt={4}>
          <Divider bgColor={"blackAlpha.500"} h="0.5px" />
          <Text>OR</Text>
          <Divider bgColor={"blackAlpha.500"} h="0.5px" />
        </HStack>
        <Button
          mt={4}
          w="63%"
          h={"40px"}
          fontSize="15px"
          variant="outline"
          leftIcon={<EmailIcon />}
        >
          CONTINUE WITH EMAIL
        </Button>
        <HStack align={'center'} justifyContent='center' mt={3} w="65%">
          <Button
            w="50%"
            h={"40px"}
            fontSize="15px"
            variant="outline"
            leftIcon={<FcGoogle />}
          >
            GOOGLE
          </Button>
          <Button
            w="60%"
            h={"40px"}
            fontSize="15px"
            variant="outline"
            leftIcon={<FaFacebook color="#3a5996" />}
          >
            FACEBOOK
          </Button>
        </HStack>
        <Text mt={3} w="65%" color={'grey'} fontSize='15px'>By creating an account or logging in, you agree with Fashion Store's <Text color={'teal'} as='b' fontSize='15px'>Terms and Conditions</Text>  and <Text color={'teal'} as='b' fontSize='15px'>Privacy Policy</Text>.</Text>
      </Flex>
    </Flex>
  );
};

export { Signup };
