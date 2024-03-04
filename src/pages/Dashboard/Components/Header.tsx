import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hook/useAuth";
import { useUser } from "../../../hook/useUser";

const Header = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { userState } = useUser();

  const logOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("userState", userState);
  }, [userState]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Reports
          </Typography>
          <Box>
            <Typography variant="body1">
              {userState ? userState.name : "algo"}
            </Typography>
          </Box>
          <Button color="inherit" onClick={logOut}>
            <LogoutIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
