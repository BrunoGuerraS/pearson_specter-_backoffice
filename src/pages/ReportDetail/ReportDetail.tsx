// import Box from "@mui/material/Box";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { getReportByIdService } from "../../service/report.service";

export const ReportDetail = () => {
  const [report, setRerport] = useState();
  const { id } = useParams();

  useEffect(() => {
    const execute = async () => {
      try {
        console.log("id into the compoente reportdetails", id);
        const res = await getReportByIdService(id);
        console.log(res.data);
        setRerport(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    execute();
  }, []);

  return (
    <>
      <Header />
      <TableContainer sx={{
        border: "1px solid red",
        display: "flex",
        justifyContent: "center",
      }}>
        <TableBody>
        {report && Object.entries(report).map(([key, value]) => (
          <TableRow key={key}>
            <TableCell>
              <Typography variant="body1" component="span" style={{ fontWeight: "bold" }}>
                {key}
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="body1" component="span">
                {value}
              </Typography>
            </TableCell>
          </TableRow>
        ))}
        </TableBody>
      </TableContainer>
    </>
  );
};
