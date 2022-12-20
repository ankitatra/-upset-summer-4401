import React, { useState } from "react";
import{useLocation, useNavigate} from "react-router-dom"
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverHeader,
//   PopoverBody,
//   PopoverFooter,
//   PopoverArrow,
//   PopoverCloseButton,
//   Button,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   FormErrorMessage,
//   FormHelperText,
// } from "@chakra-ui/react";
// export const AddressForm = () => {
//   const initRef = React.useRef();
//   return (
//     <Popover
//       closeOnBlur={false}
//       placement="left"
//       usePortal
//       initialFocusRef={initRef}
//     >
//       {({ isOpen, onClose }) => (
//         <>
//           <PopoverTrigger border="1px solid red">
//             <Button marginLeft={"900"} border="1px solid red">Click to </Button>
//           </PopoverTrigger>
//           <div style={{postion:"absolute",top:"0px"}}>
//           <PopoverContent border="4px solid blue" w={400}>
//             <PopoverHeader>Address Form</PopoverHeader>
//             <PopoverCloseButton />

//             <FormControl>
//               <FormLabel>Email address</FormLabel>
//               <Input type="email" />
//               <FormLabel>Country</FormLabel>
//               <Input type="text" />
//               <FormLabel>State</FormLabel>
//               <Input type="text" />
//               <FormLabel>City</FormLabel>
//               <Input type="text" />
//               <FormLabel>Pincode</FormLabel>
//               <Input type="number" />
//               <FormHelperText>We'll never share your email.</FormHelperText>
//             </FormControl>
//             <Button mt={4} colorScheme="teal" type="submit">
//               Submit
//             </Button>
//             <Button mt={4} variantColor="blue" onClick={onClose} ref={initRef}>
//               Close
//             </Button>

//             <PopoverFooter>This is the footer</PopoverFooter>
//           </PopoverContent>
//           </div>
//         </>
//       )}
//     </Popover>
//   );
// };

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  FormLabel,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

export const AddressForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [fullname, setFullname] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const navigate=useNavigate()
  const location=useLocation()
  const handleAddress = () => {
    const data = {
      fullname: fullname,
      country: country,
      state: state,
      city: city,
      pincode: pincode,
    };
    localStorage.setItem("address",JSON.stringify(data))
    location.pathname="./Payment"
    navigate("./Payment")
  };
  return (
    <>
      <Button
       width={"300px"}
      //  paddingLeft={15}
      // padddingRight={100}
        backgroundColor={"rgba(66,162,161)"}
        onClick={onOpen}
      >
        Address
      </Button>

      <Modal
        backgroundColor={"yellow"}

        // initialFocusRef={initialRef}
        // finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Fullname</FormLabel>
              <Input
                ref={initialRef}
                placeholder="First name"
                value={fullname}
                type="text"
                onChange={(e) => setFullname(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Country</FormLabel>
              <Input
                placeholder="Country"
                value={country}
                text="text"
                onChange={(e) => setCountry(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>State</FormLabel>
              <Input
                placeholder="State"
                value={state}
                text="text"
                onChange={(e) => setState(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>City</FormLabel>
              <Input
                placeholder="City"
                value={city}
                text="text"
                onChange={(e) => setCity(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Pincode</FormLabel>
              <Input
                placeholder="Pincode"
                value={pincode}
                text="text"
                onChange={(e) => setPincode(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleAddress} colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
