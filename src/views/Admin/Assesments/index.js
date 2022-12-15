// Chakra imports
import { Box, Flex, Grid, Icon } from "@chakra-ui/react";
import { MastercardIcon, VisaIcon } from "components/Icons/Icons";
import React from "react";
import  Assesment from "./components/Assesment";
// import { billingData } from "variables/general";
import { AssesmentsData } from "variables/new";

function Assesments() {
  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
      <Grid >
        <Box>
          <Grid
            gap='26px'>
                  <Assesment title={"Manage Assesments"} data={AssesmentsData} />
          </Grid>
        </Box>
      </Grid>
    </Flex>
  );
}

export default Assesments;
