import { Box, Image } from "@chakra-ui/react";

// export default function SingleProductImg({data}){
export default function SingleProductImg({data}) {
  // console.log("image",data.productImg)
  return (
    <Box  height={"100%"}width={"100%"}>
      <Image
      // width={"100%"}
        margin={"auto"}
        height={"100%"}
        width={"95%"}
        src={data}
        // src={"https://images.bewakoof.com/t1080/men-s-black-son-of-white-fang-graphic-printed-oversized-t-shirt-559345-1670598122-1.jpg"}
      />
    </Box>
  );
}
