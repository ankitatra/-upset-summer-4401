import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

const CartSizeButton = () => {
//   console.log(size);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState("S");
  return (
    <Box>
      <Button
        rightIcon={<FiChevronDown />}
        colorScheme="gray"
        variant="outline"
        height={"30px"}
        px={"10px"}
        onClick={onOpen}
      >
        Size : {size}
      </Button>
      {/* Modal - Size */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent my={"auto"} width={"150px"}>
          <ModalHeader textAlign={"center"} fontSize="14px">
            Select Size
            <Divider
              borderWidth={1}
              borderColor="#fdcb35"
              w="100px"
              m={"10px auto"}
            />
          </ModalHeader>
          <ModalBody>
            <VStack>
              <Button variant="ghost" value={"S"} width={"100%"} onClick={(e)=>setSize(e.target.value)}>
                S
              </Button>
              <Button variant="ghost" value={"M"} width={"100%"} onClick={(e)=>setSize(e.target.value)}>
                M
              </Button>
              <Button variant="ghost" value={"L"} width={"100%"} onClick={(e)=>setSize(e.target.value)}>
                L
              </Button>
              <Button variant="ghost" value={"XL"} width={"100%"} onClick={(e)=>setSize(e.target.value)}>
                XL
              </Button>
              <Button variant="ghost" value={"XXL"} width={"100%"} onClick={(e)=>setSize(e.target.value)}>
                XXL
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CartSizeButton;
