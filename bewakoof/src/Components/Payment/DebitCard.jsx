import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "../../css/Hidden.css"
import { useNavigate } from "react-router-dom";
import { theme } from "./ThemeLabel";

export const DebitCard = () => {
  const toast = useToast();
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [cardNum, setcardNum] = useState("");
  const [cardError, setCardError] = useState(false);
  const [cardErrorMsg, setCardErrorMsg] = useState("Card Number is required.");

  const [valid, setvalid] = useState("");
  const [validError, setValidError] = useState(false);
  const [validErrorMsg, setValidErrorMsg] = useState(
    "validity number is required."
  );

  const [cvv, setCvv] = useState("");
  const [cvvError, setCvvError] = useState(false);
  const [cvvErrorMsg, setCvvErrorMsg] = useState("cvv number is required.");

  const onsubmit = () => {
    if (cardNum.length > 0 && cardNum.length <= 11) {
      setCardError(true);
      setCardErrorMsg("Card Numbers have atlest 12 numbers");
      // console.log("cardNum.length>0 && cardNum.length<=11")
      return;
    }
    if (cardNum.length > 0 && cardNum.length >= 13) {
      setCardError(true);
      setCardErrorMsg(
        "Card Numbers have atlest 12 numbers exceeding the limits of numbers"
      );
      // console.log("cardNum.length>0 && cardNum.length>=13")
      return;
    }
    if (cardNum.length > 0 && cardNum.length == 12) {
      setCardError(false);
      setCardErrorMsg("");
      // console.log(" EROR SOLVED cardNum.length>0 && cardNum.length>=13")
    }
    if (valid.length > 0 && valid.length <= 3) {
      setValidError(true);
      setValidErrorMsg("valid Numbers have atlest 4 numbers");
      // console.log("valid.length>0 && valid.length<=3")
      return;
    }
    if (valid.length > 0 && valid.length >= 5) {
      setValidError(true);
      setValidErrorMsg(
        "valid Numbers have atlest 4 numbers exceeding the limits of numbers"
      );
      console.log("valid.length>0 && valid.length>=5");
      return;
    }
    if (cvv.length > 0 && cvv.length <= 2) {
      setCvvError(true);
      setCvvErrorMsg("cvv Numbers have atlest 3 numbers");
      // console.log("cvv.length>0 && cvv.length<=2")
      return;
    }
    if (cvv.length > 0 && cvv.length >= 4) {
      setCvvError(true);
      setCvvErrorMsg(
        "cvv Numbers have atlest 3 numbers exceeding the limits of numbers"
      );
      // console.log("ERROR in cvv.length>0 && cvv.length>=4 ")

      return;
    } else {
      if (cardNum.length == 0) {
        setCardError(true);
        setCardErrorMsg("Card Number is required.");
        // console.log("CArdNum.length==0 ")
        return;
      }
      if (valid.length == 0) {
        setValidError(true);
        setValidErrorMsg("validity Number is required.");
        // console.log("validdNum.length==0 ")
        return;
      }
      if (cvv.length == 0) {
        setCvvError(true);
        setCvvErrorMsg("cvv number is required.");
        // console.log("cardNum.length==0 ")
        return;
      }
      setCardError(false);
      setCardErrorMsg("");
      setValidError(false);
      setValidErrorMsg("");
      setCvvError(false);
      setCvvErrorMsg("");
      toast({
        title: "payment Successfull created.",
        description: "We've recived your payment",
        position: "top",
        marginTop: "150px",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      setTimeout(() => {
        navigate("/Ordersuccessfull");
      }, [2000]);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <Box margin={"auto"}>
        <Stack padding={"1rem"}>
          <Box w="100%">
            <Flex justifyContent="flex-start" gap={"30px"} width={"100%"}>
              <Image
                height={"20px"}
                src="https://images.bewakoof.com/web/ic-visa-gray-payment-v1.jpg"
              />
              <Image
                height={"20px"}
                src="https://images.bewakoof.com/web/ic-master-card-payment-v1.jpg"
              />
              <Image
                height={"20px"}
                src="https://images.bewakoof.com/web/ic-rupay-payment-v1.jpg"
              />
              <Image
                height={"20px"}
                src="https://images.bewakoof.com/web/ic-american-express-payment-v1.jpg"
              />
            </Flex>
          </Box>

          <Box w="100%">
            <Box marginTop={"30px"}>
              <FormControl isInvalid={cardError} variant="floating" isRequired>
                <Input
                  variant={"flushed"}
                  placeholder=" "
                  size="lg"
                  type="number"
                  value={cardNum}
                  minLength={11}
                  onChange={(e) => {
                    setcardNum(e.target.value);
                  }}
                />
                <FormLabel fontSize={"1rem"} fontFamily={"Montserrat"}>
                  Card Number
                </FormLabel>
                {!cardError ? (
                  <FormHelperText></FormHelperText>
                ) : (
                  <FormErrorMessage fontFamily={"Montserrat"} fontSize={"12px"}>
                    {cardErrorMsg}
                  </FormErrorMessage>
                )}
              </FormControl>
            </Box>

            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={"20px"}
              marginTop={"30px"}
            >
              <Box width={"50%"}>
                <HStack>
                  <FormControl
                    isInvalid={validError}
                    variant="floating"
                    isRequired
                  >
                    <InputGroup>
                      <Input
                        variant="flushed"
                        placeholder="Valid through(MM/YY)"
                        type="number"
                        value={valid}
                        onChange={(e) => {
                          setvalid(e.target.value);
                        }}
                      />
                      <InputRightElement>
                        <FormLabel
                          fontSize={"14px"}
                          fontFamily={"Montserrat"}
                          // display={"none"}
                        >
                          
                        </FormLabel>
                      </InputRightElement>
                    </InputGroup>

                    {!validError ? (
                      <FormHelperText></FormHelperText>
                    ) : (
                      <FormErrorMessage
                        fontFamily={"Montserrat"}
                        fontSize={"12px"}
                      >
                        {validErrorMsg}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                </HStack>
              </Box>

              <Box width={"50%"}>
                <HStack>
                  <FormControl
                    isInvalid={cvvError}
                    variant="floating"
                    // isRequired
                  >
                    <FormLabel fontFamily={"Montserrat"} fontSize={"16px"}>
                   
                    </FormLabel>
                    <Input
                      variant="flushed"
                      placeholder="cvv"
                      type="number"
                      value={cvv}
                      onChange={(e) => {
                        setCvv(e.target.value);
                      }}
                    />
                    {!cvvError ? (
                      <FormHelperText></FormHelperText>
                    ) : (
                      <FormErrorMessage
                        fontFamily={"Montserrat"}
                        fontSize={"12px"}
                      >
                        {cvvErrorMsg}
                      </FormErrorMessage>
                    )}
                  </FormControl>
                </HStack>
              </Box>
            </Flex>

            <Box marginTop={"30px"}>
              <FormControl variant="floating" isRequired>
                <FormLabel fontFamily={"Montserrat"} fontSize={"16px"}>
                  Name on card
                </FormLabel>
                <Input
                  variant="flushed"
                  placeholder={""}
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </FormControl>
            </Box>

            <Flex justifyContent={"center"} alignItems={"center"}>
              <Button
                bg={"rgb(214,214,214)"}
                mt={"14px"}
                width={"100%"}
                onClick={onsubmit}
                _hover={{
                  bg: "rgb(214,214,214)",
                }}
                _focus={{
                  bg: "rgb(214,214,214)",
                }}
              >
                {"ADD PAYMENT"}
              </Button>
            </Flex>
          </Box>
        </Stack>
      </Box>
    </ChakraProvider>
  );
};
