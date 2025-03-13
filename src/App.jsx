import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Foot from "./components/Footer";
import Hero from "./components/Hero";
import AboutUsHome from "./components/AboutUsHome";
import NewsHome from "./components/NewsHome";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Publications from "./pages/Publications";



const theme = extendTheme({
  config: {
    initialColorMode: "light", // Default light mode
    useSystemColorMode: false, // User's system preference will not override
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AboutUsHome />
                <NewsHome />
              </>
            }
          />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
        <Foot />
      </Router>
    </ChakraProvider>
  );
};

export default App;