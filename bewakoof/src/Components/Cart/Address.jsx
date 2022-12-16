import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
export const AddressForm = () => {
  const initRef = React.useRef();
  return (
    <Popover
      closeOnBlur={false}
      placement="left"
      usePortal
      initialFocusRef={initRef}
    >
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger border="1px solid red">
            <Button marginLeft={"900"} border="1px solid red">Click to </Button>
          </PopoverTrigger>
          <PopoverContent border="4px solid blue" w={400}>
            <PopoverHeader>Address Form</PopoverHeader>
            <PopoverCloseButton />

            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
              <FormLabel>Country</FormLabel>
              <Input type="text" />
              <FormLabel>State</FormLabel>
              <Input type="text" />
              <FormLabel>City</FormLabel>
              <Input type="text" />
              <FormLabel>Pincode</FormLabel>
              <Input type="number" />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <Button mt={4} colorScheme="teal" type="submit">
              Submit
            </Button>
            <Button mt={4} variantColor="blue" onClick={onClose} ref={initRef}>
              Close
            </Button>

            <PopoverFooter>This is the footer</PopoverFooter>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
};
