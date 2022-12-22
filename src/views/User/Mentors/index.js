// Chakra imports
import { Flex, Grid, Box, useColorModeValue } from "@chakra-ui/react";

import React from "react";
import MentorsList from "./components/Projects";
import { availableMentors } from "variables/new";



function Mentors() {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );


  return (
    <Flex direction='column'>
      <Box py="100px">
      <MentorsList
          title={"Available Mentors"}
          amount={30}
          captions={["Name",  "Company", "Details"]}
          data={availableMentors}
          editable={true}
          />
          </Box>
    </Flex>
  );
}

export default Mentors;
