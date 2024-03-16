import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Button, Typography } from "@mui/material";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs from "dayjs";
import { useState } from "react";

export const CustomDateSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handlerClick = () => {
    console.log("click");
    setIsVisible(!isVisible);
  };
  return (
    <Box
      position={"relative"}
      sx={{
        width: "300px",
        display: "flex",
        justifyContent: "space-between",
        background: "#efefef",
        padding: "8px ",
        borderRadius: "50px",
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
            background: "#e2e2e2",
            // border: "1px solid red",
            borderRadius: "50%",
          }}
        >
          <CalendarMonthIcon
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
        <Typography
          variant="body2"
          sx={{
            color: "gray",
          }}
        >
          Date
        </Typography>
        <Typography variant="body1">{`28 Jan - 29 Jan 2023`}</Typography>
      </Box>
      <Button
        sx={{
          minWidth: "0",
          minHeight: "0",
          width: "50px",
          height: "50px",
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
          <StaticDatePicker defaultValue={dayjs("2024-04-17")} />
        </Box>
      )}
    </Box>
  );
};
