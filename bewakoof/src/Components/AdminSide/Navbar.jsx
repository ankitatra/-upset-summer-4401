import React from "react";
import { Image, Stack, Text ,SimpleGrid,Box,Button} from '@chakra-ui/react'
import { AdminSide } from "../AdminSide/AdminSide";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.png"
export const Navbar=()=>{
    const navigate=useNavigate()
    return(
        <>
        <Stack fontSize={20} fontWeight="semibold">

            
            <Box 
            
            
            
             box-sizing="border-box"
             
            
             position="-webkit-sticky" 
            //  position="sticky"
             top="0"
             z-index="100"
            display="flex"  width="100%" height="80px" backgroundColor="#d5ede8">
                <Box  onClick={()=>navigate("/admin")}marginLeft="40" marginTop="1%">
                    <Image  width="150px" src={logo}></Image>
                </Box>
                <Box  _hover={{color:"white"}}onClick={()=>navigate("/admin")} marginLeft="500" marginTop="1.5%">
                    Dashboard
                </Box>
                <Box  _hover={{color:"white"}} onClick={()=>navigate("/adminusers")}marginLeft="20" marginTop="1.5%">
                    
                   Users
                </Box>
                <Box  _hover={{color:"white"}} onClick={()=>navigate("/adminadd")}marginLeft="20" marginTop="1.5%">
                    Add Product
                </Box>
            </Box>
        </Stack>
        </>
    )
}