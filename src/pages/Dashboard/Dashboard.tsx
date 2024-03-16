import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import LeftNavBar from "../../components/LeftNavBar";
import DashboardProvider from "./context/DasboardContext";

const Dashboard: FC = () => {
  return (
    <DashboardProvider>
      <Container
        sx={{
          maxWidth: "100% !important",
          height: "100vh",

          width: "100vw",

          padding: "0 !important",
          display: "grid",
          gridTemplateColumns: "auto repeat(10, 1fr)",
          gridTemplateRows: "auto 1fr",
          gridTemplateAreas: `"header header header header"
        "main main main main"
        "footer footer footer footer"`,
        }}
      >
        <Box
          sx={{
            gridRowStart: "1",
            gridRowEnd: "-1",
            padding: "0 10px",
            backgroundColor: "#fafafa",
            // border: "solid 1px green",
          }}
        >
          <LeftNavBar />
        </Box>
        <Box
          sx={{
            gridArea: "header",
            gridColumnStart: "2",
            gridColumnEnd: "-1",
          }}
        >
          <Header />
        </Box>
        <Box
          sx={{
            gridColumnStart: "2",
            gridColumnEnd: "-1",
            gridRowStart: "2",
            gridRowEnd: "-1",
            // border: "solid 1px red",
          }}
        >
          <Outlet />
        </Box>
      </Container>
    </DashboardProvider>
  );
};

export default Dashboard;
