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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  PinInput,
  PinInputField,
  HStack,
} from "@chakra-ui/react";
import "../css/Hidden.css"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../Redux/Authreducer/action";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Signupd = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const comingFrom = location?.state|| "/";
  const {
    isOpen: isGetOtpOpen,
    onOpen: onGetOtpOpen,
    onClose: onGetOtpClose,
  } = useDisclosure();
  const {
    isOpen: isVerifyOtpOpen,
    onOpen: onVerifyOtpOpen,
    onClose: onVerifyOtpClose,
  } = useDisclosure();

  const handleShowClick = () => setShowPassword(!showPassword);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && name && mobile) {
      
      onGetOtpOpen();
    }
  };

  const [otpVal, setOtpval] = useState(Math.floor(1000 + Math.random() * 9000));
  const [otp, setOtp] = useState([]);

  const handleGetOtp = () => {
    onGetOtpClose();
    alert(`Your OTP is ${otpVal}`);
    onVerifyOtpOpen();
  };

  const otpCheck = (e) => {

    let arr = otp;
    if (!e.target.value) {
      arr.splice(e.target.name, 1);
      setOtp(arr);
    } else {
      arr[e.target.name] = +e.target.value;
      setOtp(arr);
    }
  };
  const handleVerifyOtp = () => {
    onVerifyOtpClose();
    if (otp.join("") == otpVal) {
      dispatch(login({ name, mobile, email, password })).then((r) => {
      alert("Your mobile number has been verified successfully");
        navigate(comingFrom, { replace: true });
      });
     
    } else {
      alert("Invalid OTP!");
      setOtp([]);
      setOtpval(Math.floor(1000 + Math.random() * 9000));
    }
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
        <Image
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
        m='10'
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
              <InputLeftElement mt={"6"}
              w='100px'
              >
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
                ml={70}
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
            <Modal onClose={onGetOtpClose} isOpen={isGetOtpOpen} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Verify Your Mobile</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text color={"grey"}>
                    OTP will be sent to your Mobile number
                  </Text>
                  <Input
                    type="number"
                    placeholder="Enter Mobile Number"
                    defaultValue={mobile}
                    mt={4}
                    w="80%"
                    h={"50px"}
                    fontSize="15px"
                    variant="flushed"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    fontSize="20px"
                    mt={4}
                    w="100%"
                    h={"50px"}
                    colorScheme="teal"
                    type="submit"
                    onClick={handleGetOtp}
                  >
                    GET OTP
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Modal
              onClose={onVerifyOtpOpen}
              isOpen={isVerifyOtpOpen}
              isCentered
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Verify with OTP</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text color={"grey"}>
                    OTP will be sent to your Mobile number
                  </Text>
                  <Input
                    type="number"
                    placeholder="Enter Mobile Number"
                    value={mobile}
                    mt={4}
                    w="80%"
                    h={"50px"}
                    fontSize="15px"
                    variant="flushed"
                    disabled
                  />
                  <HStack mt={"4"}>
                    <PinInput otp>
                      <PinInputField onChange={(e) => otpCheck(e)} name="0" />
                      <PinInputField onChange={(e) => otpCheck(e)} name="1" />
                      <PinInputField onChange={(e) => otpCheck(e)} name="2" />
                      <PinInputField onChange={(e) => otpCheck(e)} name="3" />
                    </PinInput>
                  </HStack>
                </ModalBody>
                <ModalFooter>
                  <Button
                    fontSize="20px"
                    mt={4}
                    w="100%"
                    h={"50px"}
                    colorScheme="teal"
                    type="submit"
                    onClick={handleVerifyOtp}
                  >
                    SUBMIT OTP
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </FormControl>
        </form>
      </Flex>
    </Flex>
      <Footer />
    </>
    
  );
};

export { Signupd };
