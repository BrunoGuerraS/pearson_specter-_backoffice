import Box from "@mui/material/Box";
import { FC } from "react";
import Header from "./Components/Header";
import LeftBar from "./Components/LeftBar";
import ReportsTable from "./Components/ReportsTable";
import DashboardProvider from "./context/DasboardContext";

const Dashboard: FC = () => {
  return (
    <>
      <DashboardProvider>
        <Header />
        <Box sx={{
          display: "flex",
          border: "1px solid red",
        }}>
          <LeftBar />
          <ReportsTable />
        </Box>
      </DashboardProvider>
    </>
  );
};

export default Dashboard;
