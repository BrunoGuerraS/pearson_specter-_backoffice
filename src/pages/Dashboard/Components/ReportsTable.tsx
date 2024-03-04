import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useContext } from "react";
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
  const { listOfReportsByType } = useContext(DashboardContext);
  return (
    <Box
      sx={{
        flex: 1,
        height: "70vh",
      }}
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
        onCellClick={(cell)=>{
            console.log('im the cell baby',cell);
        }}
      />
    </Box>
  );
};

export default ReportsTable;
