import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from './components/Navbar'
import Foot from './components/Footer'
import Hero from './components/Hero'

const App = () => {
  const theme = {
    // ... your system-ui theme
    config: {
      useSystemColorMode: false, // or true
      initialColorMode: "light", // or "dark"
      cssVarPrefix: "chakra", // any string
    }
  }
  return (
    <ChakraProvider theme = {theme}>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Foot />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;