import LogoutIcon from "@mui/icons-material/Logout";
import { Button, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { useUser } from "../hook/useUser";
import { ls } from "../utils";
import Notification from "./Notification";
import SearchButton from "./SearchButton";

const Header = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { userState } = useUser();
  const [showModal, setShowModal] = useState(false);

  const name = ls.getItem("name");
  console.log("name", name);
  useEffect(() => {}, []);

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
    <Box
      position={"relative"}
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          padding: "0 50px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <SearchButton />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Notification />
            <Avatar
              alt="Remy Sharp"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/96be2232163929.567197ac6fb64.png"
              sx={{
                marginLeft: "20px",
              }}
              onClick={() => {setShowModal(!showModal)}}
            />
            
          </Box>
        </Toolbar>
      </AppBar>


      {showModal && <Box
        position={"absolute"}
        sx={{
          background: "#f1f1f1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px 40px",
          borderRadius: "20px",
          right: "10px",
          zIndex: 100,
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/96be2232163929.567197ac6fb64.png"
          sx={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
          }}
        />
        <Typography
          
          sx={{
            margin: "10px 0",
            textTransform: "capitalize",
          }}
        >
          !Hi {`${userState.name} ${userState.last_name}`}¡
        </Typography>


        <Button onClick={logOut}>
          <LogoutIcon />
          Log Out
        </Button>
      </Box>}
    </Box>
  );
};

export default Header;
