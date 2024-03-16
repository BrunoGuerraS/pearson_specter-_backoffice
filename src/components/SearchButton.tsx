import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";

const SearchButton = () => {
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "50px",
        height: "45px",
        padding: "0 5px",
        display: "flex",
        alignItems: "center",
      }}

    >
      <Button 
        sx={{
            minWidth: "0",
            minHeight: "0",
            width: "32px",
            height: "32px",
            marginRight: "5px",
            borderRadius: "50%",
            backgroundColor: "#f7f7f7",
        }}
      >
        <TravelExploreIcon
          sx={{
            fontSize: "1rem",               
            color: "black",
          }}
        />
      </Button>
      <InputBase placeholder="Search…" />
    </Box>
  );
};

export default SearchButton;
