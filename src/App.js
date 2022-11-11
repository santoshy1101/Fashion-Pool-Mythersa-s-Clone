import logo from './logo.svg';
import './App.css';
import { Box } from '@chakra-ui/react';
import HomeTop from './comoponents/HomeTop';
import Footer from './comoponents/Footer'
import Navbar from './comoponents/Navbar'

function App() {
  return (
    <Box className="App">
  <Navbar/>
     <HomeTop/>
    <Footer/>
  
    </Box>
  );
}

export default App;
