import NotificationsIcon from "@mui/icons-material/Notifications";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Notification = () => {
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "50px",
        height: "50px",
        padding: "0 5px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Button
        sx={{
          minWidth: "0",
          minHeight: "0",
          width: "38px",
          height: "38px",
          marginRight: "5px",
          borderRadius: "50%",
          backgroundColor: "#f7f7f7",
        }}
      >
        <NotificationsIcon
          sx={{
            fontSize: "1rem",
            color: "black"
          }}
        />
      </Button>
      <Typography
        variant="body2"
        sx={{
          color: "#c4c4c4",
        }}
      >
        Notifications
      </Typography>
      <Button  
        sx={{
            minWidth: "0",
            minHeight: "0",
            width: "23px",
            height: "23px",
            borderRadius: "50%",
            marginLeft: "10px",
            marginRight: "10px",
            backgroundColor: "#888888",
            color: "white",
        }}
      >4</Button>
    </Box>
  );
};

export default Notification;
