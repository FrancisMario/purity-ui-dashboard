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
  const { name, company, email, number } = props;

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
                When the modal opens, focus is trapped within it. When the modal
                opens, focus is automatically set to the first enabled element,
                or the element from initialFocusRef. When the modal closes,
                focus returns to the element that was focused before the modal
                activated, or the element from finalFocusRef. Clicking on the
                overlay closes the Modal. Pressing Esc closes the Modal.
                Scrolling is blocked on the elements behind the modal. The modal
                is rendered in a portal attached to the end of document.body to
                break it out of the source order and make it easy to add
                aria-hidden to its siblings.
              </Text>
              
              <Text as="span" color="gray.500">
                When the modal opens, focus is trapped within it. When the modal
                opens, focus is automatically set to the first enabled element,
                or the element from initialFocusRef. When the modal closes,
                focus returns to the element that was focused before the modal
                activated, or the element from finalFocusRef. Clicking on the
                overlay closes the Modal. Pressing Esc closes the Modal.
                Scrolling is blocked on the elements behind the modal. The modal
                is rendered in a portal attached to the end of document.body to
                break it out of the source order and make it easy to add
                aria-hidden to its siblings.
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
                  Public
                </Badge>
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
