import { Box } from "@mui/material"
import { CardResume } from "./CardResume"

export const BodyResume = () => {
  return (
    <Box sx={{
        padding: " 40px",
        display: "flex",
        justifyContent: "space-between",
    }}>

        <CardResume />
        <CardResume />
        <CardResume />
        <CardResume />
    </Box>
  )
}
