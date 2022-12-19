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
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GrUserAdmin } from "react-icons/gr";
import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../css/Hidden.css"


const Signup = () => {
  
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();
  const location=useLocation()
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You seem to be a new user");
    navigate("/signupd",{state:location.state?.data||"/", replace:true});
 

  };

  const handleEmail = () => {
    navigate("/login");
  };

  return (
    <>
    <Navbar />
      <Flex>
      <Box
        w="50%"
        h="100vh"
        bgGradient="linear(to-t, yellow.100, white)"
      >
        <Text fontSize={{ base: "15px", md: "40px", lg: "40px" }} as="b">
          Welcome to the world of Fashion Store!
        </Text>
        <Image
          m={{ base: "25vh 0"}}
          src="https://images.bewakoof.com/web/group-19-1617704502.png"
        />
      </Box>
      <Flex direction={"column"} align="center" justifyContent="center" w="50%">
        <form w="80%" onSubmit={handleSubmit}>
          <FormControl textAlign="center">
            <Text fontSize="25px" as="b">
              Log in / Sign up
            </Text>
            <Text color={"grey"}>
              for Latest trends, exciting offers and everything Fashion Store!
            </Text>
            <Input
              maxLength={"10"}
              placeholder="Enter Mobile Number"
              mt={4}
              w="80%"
              h={"50px"}
              fontSize="15px"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
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
        </form>

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
          onClick={handleEmail}
        >
          CONTINUE WITH EMAIL
        </Button>
        <Button
          mt={4}
          w="63%"
          h={"40px"}
          fontSize="15px"
          variant="outline"
          leftIcon={<GrUserAdmin />}
          onClick={()=>navigate("/adminLogin")}
        >
          LOGIN AS ADMIN
        </Button>
        <HStack align={"center"} justifyContent="center" mt={3} w="65%">
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
        <Text mt={3} w="65%" color={"grey"} fontSize="15px">
          By creating an account or logging in, you agree with Fashion Store's{" "}
          <Text color={"teal"} as="b" fontSize="15px">
            Terms and Conditions
          </Text>{" "}
          and{" "}
          <Text color={"teal"} as="b" fontSize="15px">
            Privacy Policy
          </Text>
          .
        </Text>
      </Flex>
    </Flex>
    <Footer />
    </>
    
  );
};

export { Signup };
