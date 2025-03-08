import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Foot from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Foot />
    </>
  );
}

export default App;