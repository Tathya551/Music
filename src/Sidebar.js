import React from "react";
import { Box } from "@chakra-ui/react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaHome, FaCog, FaSignOutAlt, FaFire } from "react-icons/fa";

function Sidebar() {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      bottom="0"
      width="7%"
      bg="red"
      color="white"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      padding="4"
    >
      <Box>
        <img
          src="https://weekinmemes.com/img/templates/angry-pakistan-fan.png"
          alt="Display Pic"
          style={{
            borderRadius: "50%",
            width: "80px",
            height: "73px",
            marginLeft: "10px",
            marginTop: "10px",
          }}
        />

        <BsGrid3X3GapFill
          style={{
            width: "36px",
            height: "36px",
            marginTop: "20px",
            marginLeft: "30px",
          }}
        />

        <FaHome
          style={{
            width: "36px",
            height: "36px",
            marginTop: "20px",
            marginLeft: "30px",
          }}
        />

        <FaFire
          style={{
            width: "36px",
            height: "36px",
            marginTop: "20px",
            marginLeft: "30px",
          }}
        />
      </Box>

      <Box className="icons" marginTop="20px">
        <i className="fas fa-apps"></i>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          height: "100%",
        }}
      >
        <FaCog
          style={{
            width: "36px",
            height: "36px",
            marginBottom: "20px",
          }}
        />{" "}
        <FaSignOutAlt
          style={{
            width: "36px",
            height: "36px",
            marginBottom: "20px",
          }}
        />{" "}
      </Box>
    </Box>
  );
}

export default Sidebar;
