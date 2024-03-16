import { Box, Typography } from "@mui/material";
import PaperStack from "../../../../assets/stackPaper.jpg";
import { IOSSwitch } from "../../../../components/IOSSwitch";

export const TagStackDoc = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "180px",
        height: "220px",
        background: "#57524e",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "center",
        padding: "0 30px ",
        borderRadius: "15px",
        top: "60px",
        right: "-30px",
      }}
    >
      <Box
        position={"relative"}
        sx={{
          minWidth: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={PaperStack}
          alt=""
          style={{
            width: "70px",
            height: "70px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            minWidth: "0",
            minHeight: "0",
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            border: "2px solid rgba(0, 0, 0, 0.5)",
            backgroundColor: "#45a327",
            top: "0",
            right: "0",
          }}
        />
      </Box>
      <Box
        sx={{
          margin: "10px 0",
        }}
      >
        <Typography
          sx={{
            color: "white",
          }}
        >
          Stack Paper
        </Typography>
        <Typography
          sx={{
            color: "#878481",
          }}
        >
          Lorem ipso
        </Typography>
      </Box>
      <Box>
      <IOSSwitch sx={{ m: 1 }} defaultChecked />
      </Box>
    </Box>
  );
};
