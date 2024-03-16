import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TuneIcon from "@mui/icons-material/Tune";

import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

export const Filters = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handlerClick = () => {
    console.log("click");
    setIsVisible(!isVisible);
  };
  return (
    <Box
      position={"relative"}
      sx={{
        width: "180px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#efefef",
        padding: "8px ",
        borderRadius: "50px",
        margin: "0 40px",
      }}
    >
      <Box>
        <Button
          disabled
          sx={{
            minWidth: "0",
            minHeight: "0",
            width: "50px",
            height: "50px",
            background: "#f7f7f7",
            // border: "1px solid red",
            borderRadius: "50%",
          }}
        >
          <TuneIcon
            sx={{
              color: "gray",
            }}
          />
        </Button>
      </Box>
      <Box
        sx={{
          margin: "0 10px",
          //   border: "1px solid red",
        }}
      >
        <Typography variant="body1">Filter</Typography>
      </Box>
      <Button
        sx={{
          minWidth: "0",
          minHeight: "0",
          width: "35px",
          height: "35px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          borderRadius: "50%",
        }}
        onClick={handlerClick}
      >
        <KeyboardArrowDownIcon />
      </Button>
      {isVisible && (
        <Box
          sx={{
            width: "350px",
            border: "1px solid red",
            position: "absolute",
            top: "65px",
            // right: "0",
          }}
        >
          <Box>Calendar</Box>
          <Box>Calendar</Box>
          <Box>Calendar</Box>
        </Box>
      )}
    </Box>
  );
};
