import { Box, Typography } from "@mui/material";
import { BodyResume } from "./components/BodyResume/BodyResume";
import { CustomDateSection } from "./components/SubHeader/CustomDateSection";
import { ExportCSV } from "./components/SubHeader/ExportCSV";
import { Filters } from "./components/SubHeader/Filters";

export const Resume = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 40px",
          // border: "1px solid #e2e2e2",
        }}
      >
        <Box>
          <Typography variant="h3" sx={{
            textTransform: "capitalize"
          }}>
            Resume of <br /> your reports
          </Typography>
        </Box>
        <Box sx={{
          display: "flex",
          // border: "1px solid red",
        }}>
          <CustomDateSection />
          <Filters />
          <ExportCSV />
        </Box>
      </Box>
      <BodyResume />
      <Box></Box>
    </Box>
  );
};
