/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function Footer(props) {
  // const linkblue = useColorModeValue("blue.400", "red.200");=
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px="30px"
      pb="20px"
    >
      <Text
        color="gray.400"
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        copyright &copy; {1900 + new Date().getYear()},{" "}
        <Text as="span">
          Powered By 
        </Text>
        <Link
          // color={linkblue}
          color="blue.400"
          href="https://www.gisqo.com"
          target="_blank"
        > Gisqo
        </Link>
      </Text>
    </Flex>
  );
}
