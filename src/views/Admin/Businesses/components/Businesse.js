// Chakra imports
import {
  Button,
  Flex,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  Divider,
  Center,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import IconBox from "components/Icons/IconBox";
import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import List from "./List";

import { tablesTableData } from "variables/general";

const BusinessList = ({ title, mastercard, visa }) => {
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("#dee2e6", "gray.500");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
  );

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Card p="16px" mt="24px">
      <CardHeader>
        <Flex justify="space-between" align="center" minHeight="60px" w="100%">
          <Text fontSize="lg" color={textColor} fontWeight="bold">
            {title}
          </Text>
          <Button
            bg={bgButton}
            onClick={onOpen}
            color="white"
            fontSize="xs"
            variant="no-hover"
          >
            INVITE A BUSINESS
          </Button>
          <Modal isOpen={isOpen} size="3xl" onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Site Invitations</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormControl>
                  <FormLabel>Email address</FormLabel>
                  <InputGroup size="md">
                    <Input pr="4.5rem" type="text" placeholder="Enter Email" />
                    <InputRightElement width="4.5rem">
                      <Button
                        size="md"
                        colorScheme="teal"
                        onClick={handleClick}
                      >
                        Send
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText>
                    Provide the invite reciepients email.
                  </FormHelperText>
                </FormControl>
                <Center height="50px">
                  <Divider size={'2px'} />
                </Center>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </CardHeader>
      <CardBody>
        <List
          title={"Authors Table"}
          captions={["Author", "Function", "Status", "Employed", ""]}
          data={tablesTableData}
        />
      </CardBody>
    </Card>
  );
};

export default BusinessList;
