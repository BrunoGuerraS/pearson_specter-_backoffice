import AppsIcon from "@mui/icons-material/Apps";
import ChatIcon from "@mui/icons-material/Chat";
import EditNotificationsIcon from "@mui/icons-material/EditNotifications";
import FolderIcon from "@mui/icons-material/Folder";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PersonIcon from "@mui/icons-material/Person";
import PieChartIcon from "@mui/icons-material/PieChart";
import SettingsIcon from "@mui/icons-material/Settings";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const LeftNavBar = () => {
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState(null);
  const handleClick = (name) => {
    if (isActive !== name) {
      setIsActive(name);
      navigate(`/dashboard/${name}`);
    }
  };
  const baseStyle = {
    margin: "10px 0",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    color: "black",
  };
  const isActiveStyle = {
    margin: "10px 0",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#fafafa",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // margin: "0 10px",
        // border: "1px solid #ccc",
        paddingBottom: "30px",
      }}
    >
      <Box>
        <img
          src={Logo}
          alt="Pearson Specter"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
          }}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box
            onClick={() => handleClick("home")}
            sx={{
              ...(isActive === "home" ? isActiveStyle : baseStyle),
            }}
          >
            <WarehouseIcon />
          </Box>
          <Box
            onClick={() => handleClick("resume")}
            sx={{
              ...(isActive === "resume" ? isActiveStyle : baseStyle),
            }}
          >
            <AppsIcon />
          </Box>
          <Box
            onClick={() => handleClick("alerts")}
            sx={{
              ...(isActive === "alerts" ? isActiveStyle : baseStyle),
            }}
          >
            <EditNotificationsIcon />
          </Box>
        </Box>
        <Box>
          <Box
            onClick={() => handleClick("user-data")}
            sx={{
              ...(isActive === "user-data" ? isActiveStyle : baseStyle),
            }}
          >
            <PersonIcon />
          </Box>
          <Box
            onClick={() => handleClick("chat")}
            sx={{
              ...(isActive === "chat" ? isActiveStyle : baseStyle),
            }}
          >
            <ChatIcon />
          </Box>
          <Box
            onClick={() => handleClick("documents")}
            sx={{
              ...(isActive === "documents" ? isActiveStyle : baseStyle),
            }}
          >
            <FolderIcon />
          </Box>
          <Box>
            <Box
              onClick={() => handleClick("metrics")}
              sx={{
                ...(isActive === "metrics" ? isActiveStyle : baseStyle),
              }}
            >
              <PieChartIcon />
            </Box>
          </Box>
        </Box>
        <Box>
          <Box
            onClick={() => handleClick("questions")}
            sx={{
              ...(isActive === "questions" ? isActiveStyle : baseStyle),
            }}
          >
            <HelpOutlineIcon />
          </Box>
          <Box
            onClick={() => handleClick("settings")}
            sx={{
              ...(isActive === "settings" ? isActiveStyle : baseStyle),
            }}
          >
            <SettingsIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftNavBar;
