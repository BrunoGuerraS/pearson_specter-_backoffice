import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useGetAllTypeReport } from "../../../hook/useGetAllTypeReport";

const LeftBar = () => {
  const { listOfTypeReport } = useGetAllTypeReport();
  const handlerClinc = async (id) => {};

  return (
    <Box
      sx={{
        width: "230px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
      }}
    >
      {listOfTypeReport &&
        listOfTypeReport.map((type, index) => {
          return (
            <Button
              key={index}
              variant="contained"
              sx={{
                width: "200px",
                margin: "10px",
                paddingTop: "10px",
                paddingBottom: "10px",
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
