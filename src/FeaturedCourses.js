import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

function FeaturedCourses() {
  const courses = [
    {
      imageSrc:
        "https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-73984558/73984558.jpg",
      courseName: "Guitar - a beginner's guide",
      timeTaken: "1h 39m",
      rating: 4,
      level: "Beginner",
      levelSrc: "https://d2zp5xs5cp8zlg.cloudfront.net/image-78806-800.jpg",
      button: "Start",
    },
    {
      imageSrc:
        "https://www.gitagged.com/wp-content/uploads/2019/08/Bobbili-Veena-Saraswati-Veena-2.jpg",
      courseName: "Ace Veena to mastery",
      timeTaken: "3h 56m",
      rating: 5,
      level: "Advanced",
      levelSrc:
        "https://thumbs.dreamstime.com/b/funny-cat-professor-school-university-college-books-suit-glasses-against-background-blackboard-back-to-280201322.jpg",
      button: "Start",
    },
    {
      imageSrc:
        "https://earthmoments.com/cdn/shop/articles/sitar_1888x.jpg?v=1568737429",
      courseName: "Concepts of Sitar",
      timeTaken: "59m",
      rating: 4,
      level: "Intermediate",
      levelSrc:
        "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
      button: "Start now",
    },
    {
      imageSrc:
        "https://images.hindustantimes.com/rf/image_size_800x600/HT/p1/2012/08/18/Incoming/Pictures/915827_Wallpaper2.jpg",
      courseName: "Feel the flute",
      timeTaken: "1h 45m",
      rating: 5,
      level: "Intermediate",
      levelSrc:
        "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
      button: "Unlock",
    },
  ];

  return (
    <Box>
      <Text fontSize="24" marginBottom="0.7rem" marginTop="-18px">
        Featured Courses
      </Text>
      <Box display="flex" gap="1rem">
        {courses.map((course, index) => (
          <Box
            key={index}
            flex="0 0 12%"
            border="1.8px solid black"
            borderRadius="18px"
            padding="0.4rem"
            display="flex"
            flexDirection="column"
            position="relative"
            flexGrow="1"
          >
            <Box height="79px" position="relative">
              <img
                src={course.imageSrc}
                alt={course.courseName}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "18px",
                }}
              />
              <Box
                position="absolute"
                bottom="-18px"
                left="4px"
                right="51px"
                textAlign="center"
                bg="white"
                color="gray.500"
                padding="0.25rem 0"
                border="1px solid gray"
                borderRadius="18px"
                zIndex="1"
                display="flex"
                alignItems="center"
              >
                <Box style={{ marginRight: "0.5rem" }}>
                  <img
                    src={course.levelSrc}
                    alt={course.level}
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      marginLeft: "0.2rem",
                    }}
                  />
                </Box>
                {course.level}
              </Box>
            </Box>
            <Box marginTop="0.5rem">
              <Text fontSize="19">{course.courseName}</Text>
              <Box display="flex" alignItems="center">
                <Text fontSize="sm" color="gray.500" marginRight="1rem">
                  ⌚ {course.timeTaken}
                </Text>
                <Text fontSize="sm" color="black" marginRight="1rem">
                  ⭐ {course.rating}/5
                </Text>
                <Button
                  borderRadius="50px"
                  color="white"
                  marginLeft="auto"
                  border="none"
                  padding="9px 18px"
                  fontSize="1.1rem"
                  bg="red"
                  _hover={{ bg: "pink" }}
                >
                  {course.button}
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default FeaturedCourses;
