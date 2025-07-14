import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="app">
        <Box
          bgcolor="#FFFFFF"
          width="100%"
          height="100vh"
          display="flex"
          flexDirection="column"
          overflow="hidden"
        >
          <Navbar />

          <Box
            width="100%"
            flexGrow={1}
            sx={{
              border: "2px solid black",
              overflow: "auto",
            }}
          ></Box>
        </Box>
      </div>
    </>
  );
}

export default App;
