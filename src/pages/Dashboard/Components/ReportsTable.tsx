import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardContext } from "../context/DasboardContext";

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
  },
  {
    field: "id_client",
    headerName: "ID Client",
  },
  {
    field: "created_at",
    headerName: "Created Date",
  },
  {
    field: "updated_at",
    headerName: "Updated Date",
  },
];

const ReportsTable = () => {
  const navigate = useNavigate();
  const { listOfReportsByType } = useContext(DashboardContext);
  const handlerClinc = (id) => {
    console.log("id", id);
    navigate(`/report/${id}`);
  };
  return (
    <Box
    sx={{
      flex: 1,
      height: "500px",
      border: "1px dashed purple",
    }}
    >
      <Box
        // sx={{
        //   width: "50%",
        //   flex: 1,
        //   border: "1px solid green",
        // }}
      >
        <DataGrid
          columns={columns}
          rows={listOfReportsByType}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          onCellClick={(cell) => {
            handlerClinc(cell.row.id_client);
          }}
          sx={{
            border: "1px dotted orange",
            height: "500px",
          }}
        />
      </Box>
    </Box>
  );
};

export default ReportsTable;
