import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../css/Hidden.css"
export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <>
      <Navbar />
      <Box
      bgGradient="linear(to-t, yellow.100, white)"
      h={"100vh"}
    >
      <Box w={"70%"} m="auto">
        <form>
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            h={"80vh"}
            alignItems="center"
          >
            <Text fontSize="25px" as="b" m="auto">
              Log in to your account
            </Text>
            <FormControl w={"60%"}>
              <Input
                type="email"
                placeholder="email address"
                variant="flushed"
              />
            </FormControl>
            <FormControl w={"60%"}>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  variant="flushed"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                    {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormHelperText textAlign="center">
                <Link>Forgot Password?</Link>
              </FormHelperText>
            </FormControl>
            <Button type="submit" colorScheme="teal" w={"60%"}>
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
      <Footer />
    </>
    
  );
};
