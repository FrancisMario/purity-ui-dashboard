import {
  Box,
  Icon,
  Badge,
  Flex,
  Text,
  useColorModeValue,
  Button,
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
  RadioGroup,
  Radio,
  HStack,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { FaPencilAlt, FaTrashAlt, FaStepBackward } from "react-icons/fa";

function AssessmentItem(props) {
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("#F8F9FA", "gray.800");
  const nameColor = useColorModeValue("gray.500", "white");
  const { name, description, type } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        p="24px"
        bg={bgColor}
        my="22px"
        onClick={onOpen}
        borderRadius="12px"
        cursor={"pointer"}
      >
        <Flex justify="space-between" w="100%">
          <Flex direction="column" maxWidth="70%">
            <Text color={nameColor} fontSize="md" fontWeight="bold" mb="10px">
              {name}
            </Text>
            <Text color="gray.400" fontSize="sm" fontWeight="semibold">
              Description:{" "}
              <Text as="span" color="gray.500">
                {description}
              </Text>
            </Text>
            <Text color="gray.400" fontSize="sm" fontWeight="semibold">
              Type:{" "}
              <Text as="span" color="gray.500">
                {type == 'public' ? <Badge
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
                  DELETE
                </Text>
              </Flex>
            </Button>
            <Button p="0px" bg="transparent">
              <Flex color={textColor} cursor="pointer" align="center" p="12px">
                <Icon as={FaPencilAlt} me="4px" />
                <Text fontSize="sm" fontWeight="semibold">
                  EDIT
                </Text>
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </Box>

      <Modal
        blockScrollOnMount={false}
        size="full"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Registration Assessment</ModalHeader>
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              You can scroll the content behind the modal
            </Text>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AssessmentItem;
