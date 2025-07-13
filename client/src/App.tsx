import { Box } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="app">
        <Box bgcolor="#FFFFFF" width="100%">
          <Navbar />
          <Box width="100%" height="100%"></Box>
        </Box>
      </div>
    </>
  );
}

export default App;
