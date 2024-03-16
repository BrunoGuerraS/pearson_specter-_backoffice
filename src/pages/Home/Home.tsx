import { Container } from "@mui/material";
import { ItemResume } from "./components/ItemsResume/ItemResume";
import { Welcome } from "./components/Welcome";

export const Home = () => {
  return (
    <Container
      sx={{
        maxWidth: "100% !important",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Welcome />
      <ItemResume />
    </Container>
  );
};
