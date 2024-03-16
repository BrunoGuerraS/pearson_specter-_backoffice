import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { useGetAllTypeReport } from "../../../hook/useGetAllTypeReport";
import { getAllReportsByTypeRerportService } from "../../../service/report.service";
import { DashboardContext } from "../context/DasboardContext";

const LeftBar = () => {
  const { listOfTypeReport } = useGetAllTypeReport();
  const {setListOfReportsByType} = useContext(DashboardContext)
  const handlerClinc = async (id) => {
    try {
      console.log("id", id);
      const res = await getAllReportsByTypeRerportService(id);
      console.log("res estoy en el componente lefabar", res);
      setListOfReportsByType(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid blue",
      }}
    >
      {listOfTypeReport &&
        listOfTypeReport.map((type, index) => {
          return (
            <Button
              key={index}
              variant="contained"
              sx={{
                width: "15rem",
                margin: "10px",
                paddingTop: "10px",
                paddingBottom: "10px",
                border: "1px dashed purple",
              }}
              onClick={() => {
                handlerClinc(type.id);
              }}
            >
              <Typography variant="body2" component="div">
                {type.name}
              </Typography>
            </Button>
          );
        })}
    </Box>
  );
};

export default LeftBar;
