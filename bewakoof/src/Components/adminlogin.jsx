import { Alert, Box, Button, Input, useToast } from "@chakra-ui/react";
import React, { useContext } from "react";

import { Navigate, useNavigate } from "react-router-dom";


const Adminlogin = () => {

const navigate=useNavigate()
  return (
    <Box width={'40%'}  m='auto' mt={'40px'} gap='30px' p='20px' boxShadow= 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'>
      <h1>Admin Login</h1>
      <br />
      <Input border={'1px solid black'} placeholder='Username' mb={'15px'}/>
      <Input type='password' border={'1px solid black'}  placeholder="Password" mb='20px'/>
      <Button style={{border:'1px solid black'}} onClick={()=>navigate("/admin")} > Login</Button>
    </Box>
  );
};

export default Adminlogin;