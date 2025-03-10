import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from './components/Navbar'
import Foot from './components/Footer'
import Hero from './components/Hero'

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Foot />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;