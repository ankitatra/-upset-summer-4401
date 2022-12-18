import React from "react";
import {
	HStack,
	Spacer,
	Text,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Divider,
	FormControl,
	FormLabel,
	Input,
	ChakraProvider,
	theme,
} from "@chakra-ui/react";
import { FcNext } from "react-icons/fc";
import { Theme } from "./Theam";


export const Coupons = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleCouponCode = () => {
		onClose();
	};
	return (
		<>
			<ChakraProvider theme={Theme}>
				<HStack
					px={2.5}
					bg={"rgba(66,162,161,.1)"}
					borderRadius="5px"
					fontSize={"13px"}
					color={"rgba(66,162,161)"}
					as={Button}
					w={"100%"}
					onClick={onOpen}
				>
					<Text>Have a Coupon / Referral / Gift Card ?</Text>
					<Spacer />
					<Text fontWeight={"bold"}>Redeem</Text>
					<FcNext fontSize={"14px"} />
				</HStack>
				{/* Modal - Coupon */}
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent my={"auto"}>
						<ModalHeader textAlign={"center"} fontSize="16px">
							Have a Coupon / Gift Card?
							<Divider
								borderWidth={1}
								borderColor="#fdcb35"
								w="100px"
								m={"10px auto"}
							/>
						</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<FormControl variant="floating">
								<Input placeholder=" " size="lg" />
								<FormLabel
									fontSize={"1rem"}
									fontWeight={"bold"}
									color="gray.400"
								>
									ENTER CODE
								</FormLabel>
							</FormControl>
						</ModalBody>

						<ModalFooter>
							<Button
								colorScheme="teal"
								mr={3}
								onClick={handleCouponCode}
								w={"50%"}
								m={"auto"}
							>
								APPLY
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</ChakraProvider>
		</>
	);
};


