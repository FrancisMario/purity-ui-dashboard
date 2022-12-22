// Chakra imports
import {
  Flex,
  Grid,
  useColorModeValue,
  Box,
  GridItem,
  Center,
  Icon,
  Badge,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
// import { FaCube, FaPenFancy } from "react-icons/fa";
import { ongoingAssesmentData } from "variables/new";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
function StepbyStep() {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  const bgColor = useColorModeValue("#F8F9FA", "gray.800");
  const nameColor = useColorModeValue("gray.500", "white");

  return (
    <Grid
      h="container.xl"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={2}
    >
      <GridItem
        borderRadius={10}
        padding={5}
        rowSpan={"auto"}
        colSpan={1}
        boxShadow="md"
      >
        <Flex color="white">
          <Box flex="1">
            <Center w="100px" bg="green.500">
              {" "}
              Hello world
            </Center>
          </Box>
        </Flex>
      </GridItem>
      <GridItem
        borderRadius={10}
        padding={5}
        rowSpan={"auto"}
        colSpan={4}
        boxShadow={"md"}
      >
            <Box
        p="24px"
        bg={bgColor}
        my="22px"
        height={"100%"}
        borderRadius="12px"
        cursor={"pointer"}
      >
        <Flex justify="space-between" w="100%">
          <Flex direction="column" maxWidth="70%">
            <Text color={nameColor} fontSize="md" fontWeight="bold" mb="10px">
              {"name"}
            </Text>
            <Text color="gray.400" fontSize="sm" fontWeight="semibold">
              Description:{" "}
              <Text as="span" color="gray.500">
                {"description"}
              </Text>
            </Text>
            <Text color="gray.400" fontSize="sm" fontWeight="semibold">
              Type:{" "}
              <Text as="span" color="gray.500">
                {true == 'public' ? <Badge
                  bg={"green.400"}
                  color={"white"}
                  fontSize="10px"
                  p="3px 10px"
                  borderRadius="8px"
                >
                  Public
                </Badge> :<Badge
                  bg={"blue.400"}
                  color={"white"}
                  fontSize="10px"
                  p="3px 10px"
                  borderRadius="8px"
                >
                  Private | Invite only.
                </Badge>}
              </Text>
            </Text>
          </Flex>
          <Flex
            direction={{ sm: "column", md: "row" }}
            align="flex-start"
            p={{ md: "24px" }}
          >
            <Button
              p="0px"
              bg="transparent"
              mb={{ sm: "10px", md: "0px" }}
              me={{ md: "12px" }}
            >
              <Flex color="red.500" cursor="pointer" align="center" p="12px">
                <Icon as={FaTrashAlt} me="4px" />
                <Text fontSize="sm" fontWeight="semibold">
                  Previous
                </Text>
              </Flex>
            </Button>
            <Button p="0px" bg="transparent">
              <Flex color={textColor} cursor="pointer" align="center" p="12px">
                <Icon as={FaPencilAlt} me="4px" />
                <Text fontSize="sm" fontWeight="semibold">
                  Next
                </Text>
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </Box>
      </GridItem>
    </Grid>
  );
}

export default StepbyStep;
