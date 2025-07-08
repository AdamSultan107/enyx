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

// Chakra theme config
const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        {/* Main content wrapper */}
        <main className="pt-48 md:pt-52 lg:pt-56 relative">
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
        </main>
        <Foot />
      </Router>
    </ChakraProvider>
  );
};

export default App;
