import { Box, Button, HStack, Text, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import CartQuantityButton from "./CartQuantityButton";
import CartSizeButton from "./CartSizeButton";
// import { useDispatch, useSelector } from "react-redux";

// import CartQuantityButton from "./CartQuantityButton";
// import CartSizeButton from "./CartSizeButton";
// const data=[
//     {
//       "id": 1,
//       "col-sm-4-href": "https://www.bewakoof.com/p/the-ryuk-full-sleeve-t-shirt",
//       "productImgTagSrc": "https://images.bewakoof.com/t640/the-ryuk-full-sleeve-t-shirt-554015-1667974706-1.jpg",
//       "plp": "DESIGN OF THE DAY",
//       "brand_namez": "Burberry",
//       "clr_shade_4": "Men's White The Ryuk Graphic Printed T-shirt",
//       "wishlist-icon-animate-src": "https://images.bewakoof.com/web/Wishlist.svg",
//       "discountedPriceText": 349,
//       "actualPriceText": 999,
//       "discount_price_box": 319,
//       "status": true,
//       "size": [
//         "XS",
//         "S",
//         "M",
//         "L",
//         "XL",
//         "2XL",
//         "3XL"
//       ],
//       "multi_image": [
//         "https://images.bewakoof.com/t1080/men-s-black-son-of-white-fang-graphic-printed-oversized-t-shirt-559345-1670598122-1.jpg",
//         "https://images.bewakoof.com/t1080/men-s-black-son-of-white-fang-graphic-printed-oversized-t-shirt-559345-1670598128-2.jpg",
//         "https://images.bewakoof.com/t1080/men-s-black-son-of-white-fang-graphic-printed-oversized-t-shirt-559345-1670598133-3.jpg",
//         "https://images.bewakoof.com/t1080/men-s-black-son-of-white-fang-graphic-printed-oversized-t-shirt-559345-1670598144-5.jpg",
//         "https://images.bewakoof.com/t1080/men-s-black-son-of-white-fang-graphic-printed-oversized-t-shirt-559345-1670598122-1.jpg",
//         "https://images.bewakoof.com/t1080/men-s-black-son-of-white-fang-graphic-printed-oversized-t-shirt-559345-1670598144-5.jpg"
//       ],
//       "off": 65,
//       "rating": "5"
//     }]
export const CartProduct = ({ data }) => {
  // console.log("carddata",data)
  // const dispatch = useDispatch();

  // const saved =
  // 	Number(strickprice.slice(1, strickprice.length - 1)) - Number(finalprice);

  const removeFromCartHandler = (id) => {
    axios
      .delete(`https://636e2daeb567eed48ad57264.mockapi.io/Product/${id}`)
      .then((r) => {
      })
      .catch((e) => {
      });
  };
  const [dataa, setDataa] = useState([]);
  const getdata = () => {
    axios
      .get("https://636e2daeb567eed48ad57264.mockapi.io/Product")
      .then((r) => {
        setDataa(r.data);
      })
      .catch((e) => {
      });
  };
  useEffect(()=>{
	getdata()
  },[])
  return (
    <Box border="1px solid rgb(234, 234, 234)" borderRadius={"5px"} mt={5}>
      <HStack
        mx={3}
        lineHeight={["1.4rem", "1.6rem"]}
        spacing={"20px"}
        py={5}
        borderBottom="1px solid rgb(234, 234, 234)"
        pr={3}
      >
        <Box width={["60%", "80%"]} mx={3} mt={["0.1rem", "-20px"]}>
          <Text
            lineHeight={["1rem", "1.6rem"]}
            fontSize={["13px", "15px"]}
            color="gray"
            textAlign={"left"}
          >
            {data ? data.clr_shade_4 : ""}
          </Text>
          <HStack mt={["1rem", "0.1rem"]}>
            <Text fontSize={"18px"} fontWeight="bold">
              {data && `₹${data.discountedPriceText}`}
            </Text>
            <Text fontSize={"14px"} color="gray" as="del">
              {data && `₹${data.actualPriceText}`}
            </Text>
          </HStack>
          <Text
            color={"#1d8802"}
            textAlign={"left"}
            fontSize={["13px", "15px"]}
          >
            {data ? `You saved ₹${data.discount_price_box}` : ""}
          </Text>
          <HStack spacing={"20px"} mt={5}>
            <CartSizeButton />

            <CartQuantityButton />
          </HStack>
        </Box>

        {/* image box */}
        <Box width={["40%", "20%"]}>
          <Image
            mt={["-1rem", "0rem"]}
            borderRadius="6px"
            src={data && data.productImgTagSrc}
          />
        </Box>
      </HStack>

      {/* Remove and Move to wishlist buttons */}
      <HStack>
        <Button
          variant="ghost"
          borderRadius={0}
          w={"40%"}
          color="gray"
          borderRight={"1px solid rgb(234, 234, 234)"}
          py={6}
          _hover={{ bg: "none" }}
          onClick={() => removeFromCartHandler(data.id)}
        >
          Remove
        </Button>

        <Button
          py={6}
          variant="ghost"
          borderRadius={0}
          w={"60%"}
          color="gray"
          _hover={{ bg: "none" }}
        >
          Move to Wishlist
        </Button>
      </HStack>
    </Box>
  );
};
