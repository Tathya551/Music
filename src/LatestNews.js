import React from "react";
import { Box, Text } from "@chakra-ui/react";

function LatestNews() {
  const newsTopics = [
    {
      symbol: "🎙",
      topic: "Musicians",
    },
    {
      symbol: "🎺",
      topic: "Instruments",
    },
    {
      symbol: "🛣",
      topic: "Journey",
    },
    {
      symbol: "🎵",
      topic: "Music notes",
    },
    {
      symbol: "🐱‍💻",
      topic: "Practices",
    },
    {
      symbol: "🐱‍🚀",
      topic: "Tips",
    },
    {
      symbol: "🐱‍🏍",
      topic: "Updates",
    },
  ];

  return (
    <Box mt="1.2rem">
      <Text fontSize="24" marginBottom="0.9rem">
        Latest News
      </Text>
      <Box display="flex" gap="1rem">
        {newsTopics.map((topic, index) => (
          <Box
            key={index}
            flex="0 0 9%"
            maxWidth="300px"
            border="1.8px solid black"
            borderRadius="36px"
            padding="0.2rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            position="relative"
            flexGrow="1"
            height="67px"
            _hover={{ bg: "pink" }}
          >
            <div style={{ marginBottom: "-8px" }}>
              <Box fontSize="25">{topic.symbol}</Box>
            </div>
            <div>
              <Text fontSize="14">{topic.topic}</Text>
            </div>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default LatestNews;
