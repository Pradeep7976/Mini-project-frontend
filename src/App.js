import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";

import Home from "./pages/Home/Home";
import LoginP from "./pages/login/Loginp";

import "./App.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        {/* <Nav /> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginP />} />
          </Routes> 
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
