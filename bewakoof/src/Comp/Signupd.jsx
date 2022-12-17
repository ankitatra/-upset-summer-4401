import {
  Box,
  Button,
  Flex,
  FormControl,
  Image,
  Input,
  Text,
  InputRightElement,
  InputGroup,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/Userreducer/action";

const Signupd = ({mob}) => {
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState(mob);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const comingFrom = location.state?.from?.pathname || "/";

  const handleShowClick = () => setShowPassword(!showPassword);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && name && mobile) {
      dispatch(login({ name, mobile, email, password })).then((r) => {
        navigate(comingFrom, { replace: true });
      });
    }
  };

  return (
    <Flex bgGradient="linear(to-t, yellow.100, white)">
      <Box w="50%" h="100vh" bgGradient="linear(to-t, yellow.100, white)">
        <Image
          // m={{ base: "50vh 0 0 0", md: "0", lg: "0" }}
          m={"50px auto"}
          src="https://images.bewakoof.com/web/desktop-sign-up-banner--1623760676.png"
          w={"350px"}
        />
      </Box>
      <Flex
        direction={"column"}
        align="center"
        justifyContent="center"
        w="50%"
        bg={"white"}
      >
        <form w="80%" onSubmit={handleSubmit}>
          <FormControl>
            <Text fontSize="25px" as="b">
              Sign Up
            </Text>
            <br />
            <Text fontSize="20px" as="b">
              Hi new buddy, let's get you started with the Fashion Store!
            </Text>
            <br />
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              mt={4}
              w="80%"
              h={"50px"}
              fontSize="15px"
              variant="flushed"
            />
            <InputGroup w="80%">
              <InputLeftElement mt={"5"}>
                <Select>
                  <option value="+91">+91</option>
                  <option value="+971">+971</option>
                  <option value="+1">+1</option>
                  <option value="+1">+1</option>
                </Select>
              </InputLeftElement>
              <Input
                maxLength={"10"}
                placeholder="Enter Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                mt={4}
                w="100%"
                h={"50px"}
                fontSize="15px"
                variant="flushed"
              />
            </InputGroup>

            <Input
              type="email"
              placeholder="Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              mt={4}
              w="80%"
              h={"50px"}
              fontSize="15px"
              variant="flushed"
            />
            <InputGroup w="80%">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                mt={4}
                w="100%"
                h={"50px"}
                fontSize="15px"
                variant="flushed"
              />
              <InputRightElement width="4.5rem" mt={5}>
                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                  {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button
              fontSize="20px"
              mt={8}
              w="80%"
              h={"50px"}
              colorScheme="teal"
              type="submit"
            >
              PROCEED
            </Button>
          </FormControl>
        </form>
      </Flex>
    </Flex>
  );
};

export { Signupd };
