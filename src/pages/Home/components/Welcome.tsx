import { Box, Button, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";

export const Welcome = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
      }}
    >
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Chip label="Reviewer & Editor" variant="outlined" />
      </Box>

      <Box
        sx={{
          margin: "20px 0",
        }}
      >
        <Typography variant="h2">Good Morgin</Typography>
        <Typography variant="h2">Steven</Typography>
      </Box>
      <Box
        sx={{
          marginBottom: "40px",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "#96918d",
          }}
        >
          Lets start reviewing the last reports,
          <br />
          Lorem ipsum dolor sit,
        </Typography>
      </Box>
      <Button
        variant="contained"
        sx={{
          height: "60px",
          width: "80%",
          borderRadius: "50px",
        }}
      >
        Manage Now
      </Button>
    </Box>
  );
};
