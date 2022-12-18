import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
  HStack,
  Image,
  Text,Stack,Divider
} from "@chakra-ui/react";

import { AiFillCreditCard } from "react-icons/ai";
import { IoMdWallet } from "react-icons/io";
import { SiPaypal } from "react-icons/si";
import { RiBankFill } from "react-icons/ri";
import { HiCurrencyRupee } from "react-icons/hi";
import { DebitCard } from "../Components/Payment/DebitCard";
import { Wallet } from "../Components/Payment/Wallet";
import axios from "axios";

export const Payment = () => {
  const data = JSON.parse(localStorage.getItem("address")) || [];
  console.log("localstorage", data);

  const [dataa, setData] = useState([]);
  const getdata = () => {
    axios
      .get("https://636e2daeb567eed48ad57264.mockapi.io/Product")
      .then((r) => {
        setData(r.data);
        console.log(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getdata();
  }, [dataa]);

  return (
    <Box paddingTop={30} paddingRight={30}>
   
      <Box  marginBottom={10} border="1px solid rgb(234, 234, 234)">
        <Flex justifyContent={"space-around"}>
          <Text fontWeight={"bold"} fontSize={20}>
            FASHION STORE
          </Text>
          <Text>ankitathakur</Text>
        </Flex>
      </Box>
      <Flex>
        <Box   border="1px solid rgb(234, 234, 234)" paddingLeft={150}>
          {/* <Flex width={"60%"} margin={"auto"} padding={"10px"}> */}
          <Box width={"100%"}>
            <Tabs display={"flex"} gap={"20px"}>
              <TabList
                bg={"rgb(247,247,247)"}
                textAlign={"left"}
                w={"50%"}
                display={"flex"}
                flexDir={"column"}
                fontFamily={"Montserrat"}
                fontSize={"8px"}
              >
                <Tab
                  py={"12px"}
                  _focus={{
                    bg: "white",
                    borderLeft: "5px solid rgb(66,162,162)",
                    borderBottom: "none",
                  }}
                  fontWeight={500}
                  fontFamily={"Montserrat"}
                  fontSize={"14px"}
                  height={"70px"}
                  justifyContent={"left"}
                >
                  <Flex alignItems={"center"} gap={"10px"}>
                    {" "}
                    <AiFillCreditCard fontSize={"23px"} /> Debit/Credit Card
                  </Flex>
                </Tab>
                <Tab
                  py={"12px"}
                  _focus={{
                    bg: "white",
                    borderLeft: "5px solid rgb(66,162,162)",
                    borderBottom: "none",
                  }}
                  fontWeight={500}
                  fontFamily={"Montserrat"}
                  fontSize={"14px"}
                  height={"70px"}
                  justifyContent={"left"}
                >
                  <Flex alignItems={"center"} gap={"10px"}>
                    {" "}
                    <IoMdWallet fontSize={"23px"} /> Wallet
                  </Flex>
                </Tab>
                <Tab
                  py={"12px"}
                  _focus={{
                    bg: "white",
                    borderLeft: "5px solid rgb(66,162,162)",
                    borderBottom: "none",
                  }}
                  fontWeight={500}
                  fontFamily={"Montserrat"}
                  fontSize={"14px"}
                  height={"70px"}
                  justifyContent={"left"}
                >
                  <Flex alignItems={"center"} gap={"10px"}>
                    {" "}
                    <SiPaypal fontSize={"23px"} /> UPI
                  </Flex>
                </Tab>
                <Tab
                  py={"12px"}
                  _focus={{
                    bg: "white",
                    borderLeft: "5px solid rgb(66,162,162)",
                    borderBottom: "none",
                  }}
                  fontWeight={500}
                  fontFamily={"Montserrat"}
                  fontSize={"14px"}
                  height={"70px"}
                  justifyContent={"left"}
                >
                  <Flex alignItems={"center"} gap={"10px"}>
                    {" "}
                    <RiBankFill fontSize={"23px"} />
                    Net banking
                  </Flex>
                </Tab>
                <Tab
                  py={"12px"}
                  _focus={{
                    bg: "white",
                    borderLeft: "5px solid rgb(66,162,162)",
                    borderBottom: "none",
                  }}
                  fontWeight={500}
                  fontFamily={"Montserrat"}
                  fontSize={"14px"}
                  height={"70px"}
                  justifyContent={"left"}
                >
                  <Flex alignItems={"center"} gap={"10px"}>
                    {" "}
                    <HiCurrencyRupee fontSize={"23px"} />
                    Cash On Delivery
                  </Flex>
                </Tab>
              </TabList>

              <TabPanels width={"100%"} minHeight={"350px"}>
                <TabPanel>
                  <DebitCard />
                </TabPanel>
                <TabPanel>
                  <Wallet />
                </TabPanel>
                <TabPanel>
                  <p></p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
          {/* </Flex> */}
        </Box>
        <Box  border="1px solid rgb(234, 234, 234)"fontSize={10} marginLeft={10}paddingLeft={20}>
          <Text>
            Delivering order to <span fontWeight={"bold"}>{data.fullname}</span>{" "}
            {data.city} {data.state}
          </Text>
          <Text>
            {data.country} {data.pincode}
          </Text>
          <Box>
            {dataa &&
              dataa.map((e) => {
                return (
                  <Box padding={5}>
                    <Image width={"50px"} src={e.productImgTagSrc} />
                    <Text>{`price ₹${e.actualPriceText}`}</Text>
                    <Text>{e.clr_shade_4}</Text>
                  </Box>
                );
              })}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
