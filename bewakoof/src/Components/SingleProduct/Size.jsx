import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";

export default function Size({ setsize }) {
  return (
    <Tabs variant="unstyled" marginTop={"10px"}>
      <TabList gap={"5px"}>
        <Tab
          onClick={() => {
            setsize("S");
          }}
          width={{ base: "40px", md: "50px" }}
          wi
          border={"1px solid black"}
          borderRadius={"5px"}
          _selected={{ color: "white", bg: "black" }}
        >
          S
        </Tab>
        <Tab
          onClick={() => {
            setsize("M");
          }}
          width={{ base: "40px", md: "50px" }}
          border={"1px solid black"}
          borderRadius={"5px"}
          _selected={{ color: "white", bg: "black" }}
        >
          M
        </Tab>
        <Tab
          onClick={() => {
            setsize("L");
          }}
          width={{ base: "40px", md: "50px" }}
          border={"1px solid black"}
          borderRadius={"5px"}
          _selected={{ color: "white", bg: "black" }}
        >
          L
        </Tab>
        <Tab
          onClick={() => {
            setsize("XL");
          }}
          width={{ base: "40px", md: "50px" }}
          border={"1px solid black"}
          borderRadius={"5px"}
          _selected={{ color: "white", bg: "black" }}
        >
          XL
        </Tab>
        <Tab
          onClick={() => {
            setsize("2XL");
          }}
          width={{ base: "40px", md: "50px" }}
          border={"1px solid black"}
          borderRadius={"5px"}
          _selected={{ color: "white", bg: "black" }}
        >
          2XL
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Text fontSize={"13px"} color={"RGBA(0, 0, 0, 0.48)"}>
            Garment:Chest (in Inch):38.0 | Front Length (in Inch):27.25 | Sleeve
            Length (in Inch):8.0
          </Text>
        </TabPanel>
        <TabPanel>
          <Text fontSize={"13px"} color={"RGBA(0, 0, 0, 0.48)"}>
            Garment:Chest (in Inch):40.0 | Front Length (in Inch):28.0 | Sleeve
            Length (in Inch):8.25
          </Text>
        </TabPanel>
        <TabPanel>
          <Text fontSize={"13px"} color={"RGBA(0, 0, 0, 0.48)"}>
            Garment:Chest (in Inch):42.0 | Front Length (in Inch):28.75 | Sleeve
            Length (in Inch):8.5
          </Text>
        </TabPanel>
        <TabPanel>
          <Text fontSize={"13px"} color={"RGBA(0, 0, 0, 0.48)"}>
            Garment:Chest (in Inch):44.0 | Front Length (in Inch):29.5 | Sleeve
            Length (in Inch):8.75
          </Text>
        </TabPanel>
        <TabPanel>
          <Text fontSize={"13px"} color={"RGBA(0, 0, 0, 0.48)"}>
            Garment:Chest (in Inch):46.0 | Front Length (in Inch):30.0 | Sleeve
            Length (in Inch):9.0
          </Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
