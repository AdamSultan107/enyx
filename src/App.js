import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Foot from './components/Footer'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Foot />
      </BrowserRouter>
    </>
  );
}

export default App;