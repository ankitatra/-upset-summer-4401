import { Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import axios from "axios";



import { CgShoppingBag } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import Size from "./Size";
import ProductOffer from "./ProductOffer";

import SingleProductImg from "./SingleProductImg";
import SingleProductSlider from "./SingleProductSlider";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { getProducts } from "../../Redux/Appreducer/action";
import { Rating } from "../Cart/Rating";





// const data = [
//   {
//     id: 1,
//     col_sm_4_href:
//       "https://www.bewakoof.com/p/bold-red-boyfriend-t-shirt-for-women",
//     productImgTagSrc:
//       "https://images.bewakoof.com/t640/women-s-red-boyfriend-t-shirt-170465-1658918677-1.jpg",
//     plp: "BOYFRIEND FIT",
//     brand_namez: "Burberry",
//     clr_shade_4: "Women's Red Boyfriend T-shirt",
//     discountedPriceText: 358,
//     actualPriceText: 999,
//     discount_price_box: 329,
//     size: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
//     multi_image: [
//       "https://images.bewakoof.com/t1080/women-s-black-boyfriend-t-shirt-103943-1655747735-1.jpg",
//       "https://images.bewakoof.com/t1080/women-s-black-boyfriend-t-shirt-103943-1655747741-2.jpg",
//       "https://images.bewakoof.com/t1080/women-s-black-boyfriend-t-shirt-103943-1655747746-3.jpg",
//       "https://images.bewakoof.com/t1080/women-s-black-boyfriend-t-shirt-103943-1655747752-4.jpg",
//       "https://images.bewakoof.com/t1080/women-s-black-boyfriend-t-shirt-103943-1655747757-5.jpg",
//       "https://images.bewakoof.com/t1080/women-s-black-boyfriend-t-shirt-103943-1655747762-6.jpg",
//     ],
//     off: 64,
//     rating: "2",
//   },
// ];
// console.log(data[0].productImgTagSrc);

export default function SingleProductDetial() {
  // const [token, setToken] = useState(getLocalData("userToken"));
  const [size, setsize] = useState("");
  const Toast = useToast();
  const dispatch = useDispatch();
  const { id, cat } = useParams();
  const Products = useSelector((store) => store.AppReducer.Products);
  const [currentProduct, setCurrentProduct] = useState({});


  const [data, setData] = useState([{}]);
  const navigate = useNavigate();
  useEffect(() => {
    if (Products.length === 0) {
      dispatch(getProducts({}, cat));
    }
  }, [Products.length, dispatch]);
  useEffect(() => {
    if (id) {
      const currentProduct = Products.find((item) => item.id === Number(id));
      currentProduct && setCurrentProduct(currentProduct);
      currentProduct && setData([currentProduct]);
    }
  }, [id, Products]);


  const location = useLocation();
  const HandleCart = () => {
    // console.log("currentProduct",currentProduct);
    location.pathname = "/cart";
    navigate(location.pathname);
    // fetch(`https://bewakoof-database-api.vercel.app/cartdata`,{
    //   method:"POST",
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(currentProduct),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Success:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });

    axios
      .post("https://636e2daeb567eed48ad57264.mockapi.io/Product", currentProduct)
      .then((r) => {
      })
      .catch((e) => {
      });
  };

 


  // const AddCart = (data) => {
  //   console.log("data", data._id);
  //   delete data._id;
  //   data.size = size;
  //   data.qty = 1;


  // const AddCart = (data) => {
  //   console.log("data", data._id);
  //   delete data._id;
  //   data.size = size;
  //   data.qty = 1;


  //   const payload = data;
  //   return axios
  //     .post("https://justbuybackend.onrender.com/products/cart", payload, {
  //       headers: { Authorization: "Bearer" + " " + token },
  //     })
  //     .then((res) => {
  //       console.log(res.data);

  //       Toast({
  //         title: res.data,
  //         description: `${
  //           res.data === "Product Already In The Cart" ? "error" : "success"
  //         }`,
  //         status: `${
  //           res.data === "Product Already In The Cart" ? "error" : "success"
  //         }`,
  //         duration: 5000,
  //         isClosable: true,
  //         position: "top",
  //       });
  //     })
  //     .catch((err) => {
  //       console.log("error While adding to cart", err);
  //       Toast({
  //         title: "YOU ARE NOT AUTHORIZED!!",
  //         description: "Please Login",
  //         status: "error",
  //         duration: 5000,
  //         isClosable: true,
  //         position: "top",
  //       });
  //     });
  // };
  return (
    <Flex w={"85%"} marginLeft={"100px"}>
      <Box marginLeft={"20px"} width={"100%"}>
        {/* <Flex> */}
        <SingleProductSlider
          data={data[0].productImgTagSrc}
          im={data[0].multi_image}
        />

        {/* </Flex> */}
      </Box>

      <Box maxH={"100vh"} overflow={"auto"} width={"100%"} height={"1000px"} marginLeft={"10px"}>
        <Text
          fontSize={"22px"}
          textAlign={"left"}
          fontWeight={"500"}
          color={"rgb(79, 83, 98)"}
        >
          Fashion Store
        </Text>
        <Text fontSize={"15px"} textAlign={"left"} color={"rgb(79, 83, 98)"}>
          {data[0].clr_shade_4}
        </Text>
        <Flex alignItems={"center"} marginTop={"10px"} gap={"10px"}>
          <Text fontSize={"20px"} fontWeight={"500"}>
            रु.{data[0].discount_price_box}
          </Text>
          <Text
            textDecoration={"line-through"}
            fontSize={"12px"}
            color={"RGBA(0, 0, 0, 0.48)"}
          >
            {data[0].actualPriceText}रु.
          </Text>
          <Text color={"green"}>{data[0].off} %OFF</Text>
        </Flex>

        <Text
          color={"RGBA(0, 0, 0, 0.48)"}
          fontSize={"14px"}
          textAlign={"left"}
        >
          inclusive of all taxes
        </Text>

        <Flex gap={"15px"} marginTop={"10px"} fontSize={"13px"}>
          <Box
            border={"1px solid grey"}
            padding={"5px"}
            bg={"RGBA(0, 0, 0, 0.64)"}
          >
            <Text fontWeight={"700"} color={"white"}>
              {data[0].plp}
            </Text>
          </Box>
          <Box border={"1px solid black"} padding={"5px"}>
            <Text fontWeight={"500"} fontSize={{ base: "12px", md: "14" }}>
              DESIGN OF THE DAY
            </Text>
          </Box>
        </Flex>

        <br />
        <hr />
        <Text
          textAlign={"left"}
          marginTop={"15px"}
          fontSize={"14px"}
          color={"RGBA(0, 0, 0, 0.48)"}
        >
          TriBe members get an extra discount of ₹40 and FREE shipping.
        </Text>
        <br />
        <hr />
        <br />

        {/* <Text  border={"1px solid red"} > */}
        <Text fontSize={"16px"} fontWeight={"650"} textAlign={"left"}>
          SELECT SIZE
        </Text>

        {/* </Text> */}

        <Size setsize={setsize} />

        <br />
        <Flex gap={"10px"}>
          <Button

            onClick={HandleCart}

            // onClick={() => AddCart(data)}

            leftIcon={<CgShoppingBag />}
            bg={"rgb(253,216,53)"}
            colorScheme="rgb(253,216,53)"
            variant="solid"
          >
            ADD TO BAG
          </Button>
          <Button
            leftIcon={<CiHeart />}
            variant="solid"
            color={"RGBA(0, 0, 0, 0.48)"}
            border={"1px solid grey"}
            bg={"white"}
            colorScheme="white"
          >
            WISHLIST
          </Button>
        </Flex>
        <br />
        <hr />
        <ProductOffer />
        <Rating/>
      </Box>
    
    </Flex>
  );
}
