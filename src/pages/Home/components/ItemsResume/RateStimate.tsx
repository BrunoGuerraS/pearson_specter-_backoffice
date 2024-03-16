import { Box, Typography } from "@mui/material";
import { BorderLinearProgress } from "../../../../components/BorderLinearProgress";

export const RateStimate = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "350px",
        height: "80px",
        background: "#57524e",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 30px ",
        borderRadius: "15px",
        bottom: "30px",
        right: "-2px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <Typography sx={{ color: "white" }}>Progres Task</Typography>
        <Typography sx={{ color: "#868480" }}>80%</Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <BorderLinearProgress variant="determinate" value={90} />
      </Box>
    </Box>
  );
};
