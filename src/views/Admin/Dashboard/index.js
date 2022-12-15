// Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  BaseThemeWithExtensions,
  useColorModeValue,
  Box
} from "@chakra-ui/react";
// assets
// import peopleImage from "assets/img/people-image.png";
// import logoChakra from "assets/svg/logo-white.svg";
// import BarChart from "components/Charts/BarChart";
// import LineChart from "components/Charts/LineChart";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
} from "components/Icons/Icons.js";
import React from "react";
import { dashboardTableData, timelineData } from "variables/general";
import ActiveUsers from "./components/ActiveUsers";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import MiniStatistics from "./components/MiniStatistics";
import OrdersOverview from "./components/OrdersOverview";
import Assesments from "../../User/Profile/components/Projects";
import SalesOverview from "./components/SalesOverview";
import WorkWithTheRockets from "./components/WorkWithTheRockets";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
        <MiniStatistics
          title={"Assesments"}
          amount={"4"}
          percentage={""}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Today's Users"}
          amount={"200"}
          percentage={5}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"New Users"}
          amount={"+20"}
          percentage={-14}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Documents"}
          amount={"230"}
          percentage={8}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>
      <Box py="12px">
      <BarChart />
      </Box>
      <Box py="12px" height={"500px"}>
      <LineChart />
      </Box>
    </Flex>
  );
}
