// Chakra imports
import {
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesTableRow from "components/Tables/TablesTableRow";
import BusinessesTableRow from "components/Tables/BusinessesTableRow";
import React from "react";
import { Companies } from "variables/new";

const List = ({ title, captions, data }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='6px 0px 22px 0px'>
        <Text fontSize='xl' color={textColor} fontWeight='bold'>
          List
        </Text>
      </CardHeader>
      <CardBody>
        <Table variant='simple' color={textColor}>
          <Thead>
            <Tr my='.8rem' pl='0px' color='gray.400'>
                  <Th color='gray.400' >
                    Name
                  </Th>
                  <Th color='gray.400' >
                    Business
                  </Th>
                  <Th color='gray.400' >
                    Email
                  </Th>
                  <Th color='gray.400' >
                    Type
                  </Th>
                  <Th color='gray.400' >
                    Status
                  </Th>
            </Tr>
          </Thead>
          <Tbody>
            {Companies.map((row) => {
              return (
                <BusinessesTableRow
                  key={`${row.email}-${row.name}`}
                  name={row.name}
                  logo={row.logo}
                  email={row.email}
                  company={row.company}
                  type={row.type}
                />
              );
            })}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default List;
