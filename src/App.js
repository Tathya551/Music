import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import Sidebar from "./Sidebar";
import FeaturedCourses from "./FeaturedCourses";
import LatestNews from "./LatestNews";
import MyProgress from "./MyProgress";

function App() {
  return (
    <Flex>
      <Sidebar />

      <Box p="2rem" marginLeft="7%">
        <FeaturedCourses />

        <LatestNews />

        <MyProgress />
      </Box>
    </Flex>
  );
}

export default App;
