import { Box, Typography } from "@mui/material";
import Signature from "../../../../assets/signatur.jpg";
import { IOSSwitch } from "../../../../components/IOSSwitch";



export const TagSignatures = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "240px",
        background: "#57524e",
        display: "flex",
        justifyContent: "space-around",
        padding: "10px 0",
        borderRadius: "15px",
        top: "80px",
        left: "-60px",
      }}
    >
      <Box
        position={"relative"}
        sx={{
          minWidth: "0",
          width: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // border: "solid 1px red",
        }}
      >
        <img
          src={Signature}
          alt=""
          style={{
            width: "50px",
            height: "50px",
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
      <Box>
        <Typography
          sx={{
            color: "white",
          }}
        >
          Signature
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
