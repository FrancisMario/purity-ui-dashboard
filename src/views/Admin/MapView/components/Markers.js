// Chakra imports
import {
  FaArrowDown,
  FaArrowUp,
  FaBell,
  FaCreditCard,
  FaFilePdf,
  FaHtml5,
  FaShoppingCart,
} from "react-icons/fa";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  PopoverAnchor,
  ButtonGroup,
  Box,
  Icon,
  Badge,
  Flex,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

// Custom components
import React from "react";
import { BsWindow } from "react-icons/bs";

const Marker = ({
  name,
  company,
  email,
  number,
  type,
  logo,
  address,
  lat,
  long,
}) => {
  const initialFocusRef = React.useRef();

  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("#F8F9FA", "gray.800");
  const nameColor = useColorModeValue("gray.500", "white");
  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement="bottom"
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Box
          me="12px"
          borderRadius="50%"
          bgColor={"green.400"}
          border="1px solid"
          display="flex"
          alignItems="center"
          justifyContent="center"
          w="35px"
          h="35px"
        >
          <Icon as={FaArrowDown} />
        </Box>
      </PopoverTrigger>
      <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
        <PopoverHeader pt={4} fontWeight="bold" border="0">
          {name}
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
        <Flex justify="space-between" w="100%">
          <Flex direction="column" maxWidth="70%">
            <Text color={nameColor} fontSize="md" fontWeight="bold" mb="10px">
              {company}
            </Text>
            <Text color="gray.400" fontSize="sm" fontWeight="semibold">
              Email: {" "}
              <Text as="span" color="gray.500">
                {email}
              </Text>
            </Text>
            <Text color="gray.400" fontSize="sm" fontWeight="semibold">
              Type:{" "}
              <Text as="span" color="gray.500">
                 <Badge
                  bg={"green.400"}
                  color={"white"}
                  fontSize="10px"
                  p="3px 10px"
                  borderRadius="8px"
                >
                  {type}
                </Badge>
              </Text>
            </Text>
          </Flex>
          
        </Flex>
        </PopoverBody>
        <PopoverFooter
          border="0"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          pb={4}
        >
          <Box fontSize="sm">200</Box>
          <ButtonGroup size="sm">
            <Button colorScheme="blue" ref={initialFocusRef} onClick={() => {window.location = "#/admin/profile"}}>
              View More
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default Marker;
