import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

export const OtpModalF = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button onClick={onOpen}>Trigger modal</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Verify Your Mobile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color={"grey"}>OTP will be sent to your Mobile number</Text>
            <Input
              type="number"
              placeholder="Enter Mobile Number"
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
              onClick={onClose}
            >
              GET OTP
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
