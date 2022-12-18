import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import { Link,useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../css/Hidden.css"
export const OrderCompleted = () => {
    const navigate=useNavigate()
	return (
		<>
			<Navbar />
			<Box w={"100%"}>
			<Box w={"50%"} m={"auto auto"}>
				<Image src="https://www.knowband.com/blog/wp-content/uploads/2020/03/THANKYOU-PAGE-2.png" />
				<Box w={"200px"} m={"30px auto"}>
					<Link to={"/"}>
						<Button  onclick={()=>navigate("./")}colorScheme={"teal"}>Continue Shopping</Button>
					</Link>
				</Box>
			</Box>
		</Box>
<Footer />
		</>
		
	);
};


