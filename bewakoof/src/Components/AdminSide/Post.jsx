import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Stack,
  Input,
  HStack,
  Radio,
  RadioGroup,
  position,
  SimpleGrid,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./admin.css";
import {useDispatch} from "react-redux"
import { FaCut } from "react-icons/fa";
import axios from "axios";
import { useRef } from "react";
import { getdata } from "../../Redux/Appreducer/action";
export const PostRequest = () => {
  const toast = useToast();
  const [count, setCount] = useState(10);
  const [name, setname] = useState("");
  const [image, setimage] = useState("");
  const [price, setprice] = useState("");
  const [discount, setdiscount] = useState("");
  const [category, setCategory] = useState("");
  const [val, getval] = useState(true);
  const ref = useRef();
  const dispatch=useDispatch()
  const getvalfun = () => {
    ref.current = val;
    getval(!ref.current);
    console.log(val);
    console.log("rhbff");
  };

  const postdata = () => {
    return axios
      .post("https://636e2daeb567eed48ad57264.mockapi.io/admin", {
        id: setCount((pre) => pre + 1),
        name,
        image,
        price,
        discount,
        category,
      })
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error);
      });

    toast({
      title: "Product has been added successfully in a database",
      position: "top",
      isClosable: true,
      status: "success",
    });
  };
  const handledata=()=>{
    postdata().then(()=>{
       dispatch(getdata())
    
    })
    setname("")
    setimage("")
    setprice("")
    setCount("")
    setdiscount("")
    setCategory("")
  }
  return (
    <>
   
      <div>
        <Stack margin="auto" width="90%">
          <FormControl
            boxShadow=" rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
            paddingLeft={10}
            paddingRight={10}
            paddingTop={10}
            paddingBottom={10}
          >
            <FormHelperText color="teal" fontSize="25px" textAlign="center">
              Add Product
            </FormHelperText>
            <FormLabel paddingTop={5} color="teal">
              Name
            </FormLabel>
            <Input
              border="1px solid teal"
              onChange={(e) => setname(e.target.value)}
              type="text"
            />
            <FormLabel paddingTop={5} color="teal">
              Image
            </FormLabel>
            <Input
              border="1px solid teal"
              onChange={(e) => setimage(e.target.value)}
              type="url"
            />
            <FormLabel paddingTop={5} color="teal">
              Price
            </FormLabel>
            <Input
              border="1px solid teal"
              onChange={(e) => setprice(e.target.value)}
              type="number"
            />
            <FormLabel paddingTop={5} color="teal">
              Discount
            </FormLabel>
            <Input
              border="1px solid teal"
              onChange={(e) => setdiscount(e.target.value)}
              type="text"
            />
            <FormLabel paddingTop={5} color="teal">
              Product Category
            </FormLabel>
            <RadioGroup
              color="teal"
              onChange={(e) => setCategory(e)}
              defaultValue="Itachi"
            >
              <HStack spacing="24px">
                <SimpleGrid columns={3}>
                  <Radio value="Men">Men</Radio>
                  <Radio value="Women">Women</Radio>
                  <Radio value="Mobile">Mobile</Radio>
                </SimpleGrid>
              </HStack>
            </RadioGroup>
            <Button
              color="white"
              backgroundColor="teal"
              margin="auto"
              marginTop="10px"
              width="100%"
              onClick={handledata}
              type="submit"
            >
              Add Product
            </Button>
          </FormControl>
        </Stack>
      </div>
     
    </>
  );
};
