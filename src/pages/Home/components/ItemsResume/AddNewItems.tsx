import AddCommentIcon from '@mui/icons-material/AddComment';
import { Box, Button, Typography } from "@mui/material";

export const AddNewItems = () => {
  return (
    <Box
      sx={{
        width: "300px",
        display: "flex",
        // border: "1px solid #ccc",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="h6">Your items</Typography>
        <Typography variant="body2">Add all items that you need</Typography>
      </Box>
      <Button variant="contained" color="primary" sx={{
        borderRadius: "20px",
        color: "white"
        }}>
        <AddCommentIcon />
      </Button>
    </Box>
  );
};
