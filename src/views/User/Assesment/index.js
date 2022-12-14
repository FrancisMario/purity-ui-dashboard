// Chakra imports
import { Flex, Grid, useColorModeValue, Box } from "@chakra-ui/react";
import React from "react";
import { FaCube, FaPenFancy } from "react-icons/fa";
import { dashboardTableData } from "variables/general";
import Projects from "./components/Projects";


function MyAssesment() {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );

  return (
    <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
    <Grid >
      <Box>
        <Grid
          gap='26px'>
        <Projects
          title={"Ongoing Assesments"}
          amount={30}
          captions={["Name",  "Completion"]}
          data={dashboardTableData}
          />
        </Grid>
      </Box>
    </Grid>
  </Flex>
  );
}

export default MyAssesment;
