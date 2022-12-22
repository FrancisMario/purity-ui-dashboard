// Chakra imports
import {
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
  Input
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import AssessmentItem from "./AssesmentItem";
import React, {useState} from "react";

const Assesments = ({ title, data }) => {
  const textColor = useColorModeValue("gray.700", "white");
  const iconblue = useColorModeValue("blue.300", "blue.300");
  const borderColor = useColorModeValue("#dee2e6", "gray.500");
  const bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "gray.800"
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [input, setInput] = useState(null)

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''
  return (
    <Card my={{ lg: "24px" }} me={{ lg: "24px" }}>
      <Flex direction="column">
        <CardHeader py="12px">
          <Flex
            justify="space-between"
            align="center"
            minHeight="60px"
            w="100%"
          >
            <Text fontSize="lg" color={textColor} fontWeight="bold">
              {title}
            </Text>
            <Button
              onClick={onOpen}
              bg={bgButton}
              color="white"
              fontSize="xs"
              variant="no-hover"
            >
              CREATE AN ASSESSMENT
            </Button>

            <Modal
              blockScrollOnMount={false}
              size="xl"
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>New Assessment</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text fontWeight="bold" mb="1rem">
                    Please use the form below to create an assesment.
                  </Text>
                  <FormControl isInvalid={isError}>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="name"
                      value={input}
                      onChange={handleInputChange}
                    />
                    {!isError ? (
                      <FormHelperText>
                        Enter the name  you'd like to call this assesment.
                      </FormHelperText>
                    ) : (
                      <FormErrorMessage>Assesment name is required.</FormErrorMessage>
                    )}
                  </FormControl>

                  <FormControl isInvalid={isError}>
                    <FormLabel>Description</FormLabel>
                    <Input
                      type="text"
                      value={input}
                      onChange={handleInputChange}
                    />
                    {!isError ? (
                      <FormHelperText>
                        A brief description about the nature of this assesment.
                      </FormHelperText>
                    ) : (
                      <FormErrorMessage>Assesment description is required.</FormErrorMessage>
                    )}
                  </FormControl>

                  <FormControl as="fieldset">
                    <FormLabel as="legend">Accessment Status</FormLabel>
                    <RadioGroup defaultValue="public">
                      <HStack spacing="24px">
                        <Radio value="public">Public</Radio>
                        <Radio value="private">Private</Radio>
                      </HStack>
                    </RadioGroup>
                    <FormHelperText>
                      Private assesments are invite only assesments, whilst public assesments can be taken by any business.
                    </FormHelperText>
                  </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant="ghost" border={"1px"}>Next Step</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
        </CardHeader>
        <CardBody>
          <Flex direction="column" w="100%">
            {data.map((row) => {
              return (
                <AssessmentItem
                  name={row.name}
                  type={row.type}
                  description={row.description}
                />
              );
            })}
          </Flex>
        </CardBody>
      </Flex>
    </Card>
  );
};

export default Assesments;
