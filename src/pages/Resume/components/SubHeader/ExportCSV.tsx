import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

export const ExportCSV = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handlerClick = () => {
    console.log("click");
    setIsVisible(!isVisible);
  };
  return (
    <Box
      position={"relative"}
      sx={{
        width: "165px",
        height: "66px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
        padding: "12px",
        borderRadius: "50px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          color: "white",
        }}
      >
        <Typography variant="body2">
          Export as CVS
        </Typography>
        <ArrowOutwardIcon />
      </Box>
    </Box>
  );
};
