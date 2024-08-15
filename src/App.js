import React from "react";
import { Box } from './Components/Root/index'
import { Navbar } from "./Components/index";
import { Introduction, Experience, Projects , Contact } from "./Sections/index";

function App() {
  return (
    <Box className="md:w-[75vw] mx-auto shadow-2xl shadow-gray-600/25 ">
      <Box>
        <Navbar />
        <Introduction />
        <Experience />
        <Projects />
        <Contact/>
      </Box>
    </Box>
  );
}

export default App;
