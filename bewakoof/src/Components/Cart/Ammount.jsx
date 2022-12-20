import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { AddressForm } from "./Address";
export const Ammount = () => {
  // console.log("dataAmmount",data)
  const [data, setData] = useState([]);
  const getdata = () => {
    axios
      .get("https://636e2daeb567eed48ad57264.mockapi.io/Product")
      .then((r) => {
        setData(r.data);
        // console.log(r.data[0]);
      })
      .catch((e) => {
      });
  };


  let totalPrice = 0;
  data &&
    data.forEach((item) => {
      totalPrice += item.actualPriceText;
    });

  let DiscountPrice = 0;
  data &&
    data.forEach((item) => {
      DiscountPrice += item.discountedPriceText;
    });
    
  let subtotal = totalPrice - DiscountPrice;

  
  useEffect(() => {
    getdata();
  }, []);

  return (
    <Box>
      <Box margin={5} border="1px solid rgb(234, 234, 234)">
        <Text
          marginBottom={2}
          backgroundColor={"#eaf7f6"}
          fontSize={15}
          fontWeight={"bold"}
        >
          PRICE SUMMARY
        </Text>
        <Flex>
          <Text>Total MRP (Incl.of taxes)</Text>
          <Text paddingLeft={200}>{totalPrice}</Text>
        </Flex>
        <Flex>
          <Text>Shipping Chrges</Text>
          <Text color={"#1d8802"} paddingLeft={250}>
            FREE
          </Text>
        </Flex>
        <Flex>
          <Text>Bag Discount</Text>
          <Text paddingLeft={270}>{DiscountPrice}</Text>
        </Flex>
        <Flex>
          <Text>Subtotal</Text>
          <Text paddingLeft={305}>{subtotal}</Text>
        </Flex>
      </Box>
      <Box paddingLeft={5} paddingRight={5}>
      <Text
        borderRadius={20}
        marginBottom={2}
        paddingLeft={5}
        paddingRight={5}
        backgroundColor={"#eaf7f6"}
        fontSize={13}
        color={"#1d8802"} 
       
      >
       You are saving ₹ {`${DiscountPrice}`} on this order
      </Text>
      </Box>
      <Flex>
        <Box
          margin={5}
          textAlign={"left"}
          paddingLeft={5}
          width={"50%"}
          border="1px solid rgb(234, 234, 234)"
        >
          <Text fontSize={13} paddingTop={1}>
            Total:
          </Text>
          <Text>{` ₹${totalPrice}`}</Text>
        </Box>
        <Box margin={5}>
          <AddressForm />
        </Box>
      </Flex>
    </Box>
  );
};
