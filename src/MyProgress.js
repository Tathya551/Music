import React from "react";
import { Box, Text, Flex, IconButton, Button } from "@chakra-ui/react";
import { MdBookmarkBorder } from "react-icons/md";

function MyProgress() {
  const ongoingCourses = [
    {
      imageSrc:
        "https://cdn.mightyexpert.com/wp-content/uploads/2018/05/easy-guitar-songs-2.jpg",
      courseName: "A Beginner's Roadmap to Music",
      author: "Poojan",
      percentageComplete: 83,
    },
    {
      imageSrc:
        "https://meditationiseasy.com/blog/wp-content/uploads/2013/06/music.jpg",
      courseName: "How to Meditate through Music",
      author: "Tathya",
      percentageComplete: 18,
    },
  ];

  return (
    <Box mt="2rem">
      <Text fontSize="25" marginBottom="1rem">
        My Progress
      </Text>
      <Flex gap="1rem">
        {ongoingCourses.map((course, index) => (
          <Box
            key={index}
            flex="0 0 48%"
            display="flex"
            alignItems="center"
            border="1.8px solid black"
            borderRadius="23px"
            padding="0.5rem"
            marginBottom="0.5rem"
            position="relative"
          >
            <Box flex="0 0 30%">
              <img
                src={course.imageSrc}
                alt={course.courseName}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "17px",
                }}
              />
            </Box>
            <Box flex="1" marginLeft="1rem">
              <Text
                fontSize="lg"
                fontWeight="bold"
                marginBottom="0.2rem"
                marginTop="0.2rem"
              >
                {course.courseName}
              </Text>
              <Text
                fontSize="sm"
                color="gray.500"
                marginBottom="0.2rem"
                marginTop="0.2rem"
              >
                {course.author}
              </Text>
              <div
                style={{ marginBottom: "0.2rem", marginTop: "0.2rem" }}
              ></div>
              <div
                style={{
                  marginBottom: "0.2rem",
                  marginTop: "0.5rem",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "6px",
                    borderRadius: "3px",
                    background: `linear-gradient(to right, #FF0000 ${course.percentageComplete}%, #ccc ${course.percentageComplete}%)`,
                  }}
                />
              </div>
              <Box display="flex" alignItems="center">
                <div style={{ marginBottom: "-1rem", marginTop: "2rem" }}></div>
                <IconButton
                  aria-label="Bookmark"
                  position="absolute"
                  top="0.5rem"
                  right="0.5rem"
                  border="none"
                  bg="red"
                  borderRadius="50%"
                  _hover={{ bg: "pink" }}
                  boxSize={29}
                >
                  <Box color="white">
                    <MdBookmarkBorder />
                  </Box>
                </IconButton>
                <Text marginBottom="-0.2rem">
                  {course.percentageComplete}% Complete
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Flex>
      <Box mt="0.1rem">
        <Button
          borderRadius="50px"
          color="white"
          marginLeft="569px"
          border="none"
          padding="9px 18px"
          fontSize="1.1rem"
          bg="red"
          _hover={{ bg: "pink" }}
        >
          View All
        </Button>
      </Box>
    </Box>
  );
}

export default MyProgress;
