import axios from "axios";
import React, { useEffect, useState } from "react";
import { CartProduct } from "./cardProduct ";
import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import { Coupons } from "./Coupons";
import { AddressForm } from "./Address";
import { Ammount } from "./Ammount";
import { Rating } from "./Rating";

export const Cart = () => {
  const [dataa, setDataa] = useState([]);
  const [name,setname]=useState("ankita")
  const getdata = () => {
    axios
      .get("https://636e2daeb567eed48ad57264.mockapi.io/Product")
      .then((r) => {
        setDataa(r.data);
      })
      .catch((e) => {
      });
  };

  useEffect(() => {
    getdata();
  }, [dataa]);
  if (dataa !== undefined) {
  }


 useEffect(()=>{
  try {
    let username=JSON.parse(localStorage.getItem("username"))||""
    setname(username)
  } catch (error) {
    
  }
 },[])
  

  
  return (
    <>

      <Box marginLeft={20} marginRight={20}>
        <Flex justifyContent={"space-around"}>
          <Box paddingTop={2} fontSize={25} fontWeight={"bold"}>
            <Text> Fashion Store</Text>
          </Box>
          <Box paddingTop={2}>{name}</Box>
        </Flex>
        <Box
          paddingInlineStart={5}
          marginTop={5}
          marginRight={5}
          border="1px solid rgb(234, 234, 234)"
        >
          <Flex>
            <Text fontWeight={"bold"}>My Bag </Text>
            <Text paddingLeft={2}>{`${" "}${dataa.length}`} item(s)</Text>
          </Flex>
        </Box>
        <Flex>
          <Box marginTop={5} border="1px solid rgb(234, 234, 234)">
            <Text paddingInlineStart={5}>
              {" "}
              Yay! You get FREE delivery on this order
            </Text>

            {dataa !== undefined &&
              dataa.map((item, i) => {
                // console.log(item);
                return <CartProduct data={item} key={i} />;
              })}
          </Box>
          <Box marginTop={5}>
            <Box marginLeft={5}>
              <Button width={"570px"} backgroundColor={"yellow"}>
                Save extra ₹350 with TriBe
              </Button>
            </Box>
            <Box marginTop={5} margin={5} border="1px solid rgb(234, 234, 234)">
              Get Rs.200 instant discount on your First Purchase above Rs.999.
              Coupon code -NEW200
            </Box>
            <Box
              margin={5}
              marginTop={5}
              marginBottom={5}
              border="1px solid rgb(234, 234, 234)"
            >
              Whistles! Get extra 20% Cashback on prepaid orders above Rs.499.
              Coupon code - NEW20. Applicable for new customers only!
            </Box>
            <Box marginLeft={5} marginRight={5}>
              <Coupons />
            </Box>

            <Ammount />
          </Box>
        </Flex>
      </Box>
    </>
  );
};
