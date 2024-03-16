import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box, Typography } from "@mui/material";

export const CardResume = () => {
  return (
    <Box
      sx={{
        width: "300px",
        color: "white",
        height: "190px",
        background: "black",
        borderRadius: "40px",
        padding: "20px 30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body1"> Lorem ipsum dolo</Typography>
        <Box
          sx={{
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            color: "black",
            borderRadius: "50%",
          }}
        >
          <ArrowOutwardIcon />
        </Box>
      </Box>
      <Box>
        <Typography variant="h2">N° 123</Typography>
      </Box>
      <Box>
        <Typography variant="body1">
          <strong>Lorem</strong> - ipsum dolor{" "}
        </Typography>
      </Box>
    </Box>
  );
};
