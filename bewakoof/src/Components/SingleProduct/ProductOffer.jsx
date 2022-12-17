// import React from "react";
// import { Box ,Flex,Center,Square,Text} from "@chakra-ui/react";

// export const SingleProduct = () => {
//   return (
//     <Box  w="100px">
//       <Flex color="white">
//         <Square w="100px" bg="green.500">
//           <Text>Box 1</Text>
//         </Square>
//         <Square  w="100px" bg="blue.500" >
//           <Text>Box 2</Text>
//         </Square>
//         <Square w="100px" h="400px"bg="tomato">
//           <Text>Box 3</Text>
//         </Square>
//       </Flex>
//     </Box>
//   );
// };

import {Accordion,AccordionItem,AccordionButton,AccordionPanel, Box, Flex, Text} from '@chakra-ui/react'
import {AiOutlineMinus,AiOutlinePlus} from "react-icons/ai"
import{HiReceiptPercent} from "react-icons/hi2"

export default function ProductOffer(){

    const Data=[{
        heading:"Wohoo! Get a free gift worth Rs.399 on all prepaid orders Use Coupon Code- GETFREEGIFT."
    },
    {
        heading:"Get Rs.200 instant discount on your First Purchase above Rs.999. Coupon code -NEW200"
    },
    {
        heading:"Whistles! Get extra 20% Cashback on prepaid orders above Rs.499. Coupon code - NEW20. Applicable for new customers only!"
    }
]
    return (
        <Accordion allowMultiple>
            <AccordionItem>
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontSize={"13px"} fontWeight={"600"}>
                        SAVE EXTRA WITH 3 OFFERS
                        </Box>
                        {isExpanded ? (
                        <AiOutlineMinus fontSize='12px' />
                        ) : (
                        <AiOutlinePlus fontSize='12px' />
                        )}
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        {Data.map((elem,i)=>{
                            return  <Flex key={i}alignItems={"center"} gap={"10px"}>
                            <HiReceiptPercent fontSize={"25px"}/>
                             <Text width={"90%"} fontSize={"13px"} color={"RGBA(0, 0, 0, 0.48)"}>{elem.heading}</Text>
                            </Flex> 
                        })}
                                    
                    </AccordionPanel>
                    
                </>
                )}
            </AccordionItem>

            <AccordionItem>
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontSize={"13px"} fontWeight={"600"}>
                        PRODUCT DESCRIPTION
                        </Box>
                        {isExpanded ? (
                        <AiOutlineMinus fontSize='12px' />
                        ) : (
                        <AiOutlinePlus fontSize='12px' />
                        )}
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize={"13px"} color={"RGBA(0, 0, 0, 0.48)"}>
                    Men's White What The Duck Graphic Printed Oversized T-shirt
                    </AccordionPanel>
                    
                </>
                )}
            </AccordionItem>

            <AccordionItem>
                {({ isExpanded }) => (
                <>
                    <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontSize={"13px"} fontWeight={"600"}>
                        15 DAY RETURNS & EXCHANGE
                        </Box>
                        {isExpanded ? (
                        <AiOutlineMinus fontSize='12px' />
                        ) : (
                        <AiOutlinePlus fontSize='12px'/>
                        )}
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize={"13px"} color={"RGBA(0, 0, 0, 0.48)"}>
                    Easy returns upto 15 days of delivery. Exchange available on select pincodes
                    </AccordionPanel>
                    
                </>
                )}
            </AccordionItem>
</Accordion>
    )
}