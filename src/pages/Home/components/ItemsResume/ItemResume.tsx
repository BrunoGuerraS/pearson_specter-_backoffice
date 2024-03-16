import { Box } from "@mui/material";
import homeImage from "../../../../assets/HomeDocuments.jpg";
import { AddNewItems } from "./AddNewItems";
import { RateStimate } from "./RateStimate";
import { TagSignatures } from "./TagSignatures";
import { TagStackDoc } from "./TagStackDoc";

export const ItemResume = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        // border: "1px solid #ccc",
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <img
          src={homeImage}
          alt="work"
          style={{
            width: "500px",
            height: "500px",
            borderRadius: "50%",
          }}
        />
        <TagSignatures />
        <TagStackDoc />
        <RateStimate />
      </Box>
      <AddNewItems />
    </Box>
  );
};
