// Chakra imports
import { Box, Flex, Grid, Icon } from "@chakra-ui/react";
// Assets
import BackgroundCard1 from "assets/img/BackgroundCard1.png";
import { MastercardIcon, VisaIcon } from "components/Icons/Icons";
import React from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaBell,
  FaCreditCard,
  FaFilePdf,
  FaHtml5,
  FaShoppingCart,
} from "react-icons/fa";
import {
  billingData,
  invoicesData,
  newestTransactions,
  olderTransactions,
} from "variables/general";
import Details from "./components/Details";
import GoogleMapReact from "google-map-react";
import Marker from "./components/Markers";
import { Companies } from "variables/new";
import { IoCompassOutline } from "react-icons/io5";

function MapView() {
  const defaultProps = {
    center: {
      lat: 13.357886764309729,
      lng: -16.67891976730211,
    },
    zoom: 12.5,
  };

  const AnyReactComponent = ({ text }) => <div>"Hello world"</div>;
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Grid /* templateColumns={{ sm: "1fr", lg: "2fr 1.2fr" }} templateRows="1fr"*/
      >
        <Box height={{ sm: "200px", md: "600px", lg: "900px" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCFw8826IqSWbL1RZ3q4hvC2oQbn6ELNGI",
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            {Companies.map(
              ({
                name,
                company,
                email,
                number,
                type,
                logo,
                address,
                lat,
                long,
              }) => {
                return (
                  <Marker
                    name={name}
                    company={company}
                    email={email}s
                    number={number}
                    type={type}
                    address={address}
                    lat={lat}
                    lng={long}
                    text="My Marker"
                  />
                );
              }
            )}
          </GoogleMapReact>
        </Box>
        {/* <Details title={"Company Details"} data={invoicesData} /> */}
      </Grid>
    </Flex>
  );
}

export default MapView;
