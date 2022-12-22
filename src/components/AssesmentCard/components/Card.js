// Chakra imports
import {
  Avatar,
  Button,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import CardItem from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import React from "react";

const CardItems = (data) => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <CardItems p='16px'>
      <CardHeader p='12px 5px' mb='12px'>
        <Text fontSize='lg' color={textColor} fontWeight='bold'>
          {title}
        </Text>
      </CardHeader>
      <CardBody px='5px'>
        <Flex direction='column' w='100%'>
          <Flex justifyContent='space-between' mb='21px'>
            <Flex align='center'>
              <Avatar
                // src={}
                w='50px'
                h='50px'
                borderRadius='15px'
                me='10px'
              />
              <Flex direction='column'>
                <Text fontSize='sm' color={textColor} fontWeight='bold'>
                  Kara Jange.{" "}
                </Text>
                <Text fontSize='xs' color='gray.500' fontWeight='400'>
                  Hi! I need more information...
                </Text>
              </Flex>
            </Flex>
            <Button p='0px' bg='transparent' variant='no-hover'>
              <Text
                fontSize='sm'
                fontWeight='600'
                color='blue.300'
                alignSelf='center'>
                Chat
              </Text>
            </Button>
          </Flex>
        </Flex>
      </CardBody>
    </CardItems>
  );
};

export default CardItems;