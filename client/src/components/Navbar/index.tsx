import FlexBetween from "../FlexBetween";
import { Box, Typography } from "@mui/material";
import stepUpIcon from "../../assets/stepUpIcon.png";
import { QueryStats } from "@mui/icons-material";

const Navbar = () => {
  return (
    <FlexBetween width="100%" height="40px">
      <Box
        sx={{
          border: "2px solid black",
        }}
        ml={2}
        pr={16}
      >
        <img src={stepUpIcon} alt="Step Up" width={80} height={29} />
      </Box>
      <Box
        sx={{
          border: "2px solid black",
        }}
      >
        <Typography
          fontWeight="bold"
          fontSize="16px"
          color="#3F3F3F"
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          Session Guides
        </Typography>
      </Box>
      <Box
        sx={{
          border: "2px solid black",
        }}
      >
        Support Channels
      </Box>
      <Box
        display="flex"
        sx={{
          border: "2px solid black",
        }}
      >
        <Box>Announcements</Box>
        <Box>1</Box>
      </Box>
      <Box
        sx={{
          border: "2px solid black",
        }}
        pr={2}
      >
        <QueryStats />
      </Box>
    </FlexBetween>
  );
};

export default Navbar;
