// Chakra imports
import { Box, Flex, Grid, Icon } from "@chakra-ui/react";
import { MastercardIcon, VisaIcon } from "components/Icons/Icons";
import React from "react";
import  BusinessList from "./components/Businesse";

function Businesses() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Grid >
        <Box>
          <Grid
            gap='26px'>
          <BusinessList
            title={"Registered Businesses"}
            mastercard={{
              icon: <MastercardIcon w='100%' h='100%' />,
              number: "7812 2139 0823 XXXX",
            }}
            visa={{
              icon: <VisaIcon w='100%' h='100%' />,
              number: "7812 2139 0823 XXXX",
            }}
          />
          </Grid>
        </Box>
      </Grid>
    </Flex>
  );
}

export default Businesses;
