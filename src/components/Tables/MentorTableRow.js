import {
  Avatar,
  AvatarGroup,
  Flex,
  Icon,
  Progress,
  Td,
  Text,
  Tr,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import avatar1 from "assets/img/avatars/avatar1.png";

function MentorTableRow(props) {
  const { logo, name, members, budget, progression, editable = true } = props;
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Tr>
      <Td minWidth={{ sm: "250px" }} pl="0px">
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Icon as={logo} h={"24px"} w={"24px"} pe="5px" />
          <Text
            fontSize="md"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
          >
            {name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <Text
            fontSize="md"
            color="blue.300"
            fontWeight="bold"
            pb=".2rem"
          >Gisqo Technologies</Text>
        </Flex>
      </Td>
      <Td>
        <Flex direction="column">
          <Text
            fontSize="md"
            color="blue.300"
            fontWeight="bold"
            pb=".2rem"
          >Bio</Text>
          this is the bio text for this mentor          
        </Flex>
      </Td>
      <Td>
      </Td>
    </Tr>
  );
}

export default MentorTableRow;
