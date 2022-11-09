import logo from './logo.svg';
import './App.css';
import { Stack } from '@chakra-ui/react';
import HomeTop from './comoponents/HomeTop';
import Footer from './comoponents/Footer'


function App() {
  return (
    <Stack className="App">
     <HomeTop/>
    <Footer/>
  
    </Stack>
  );
}

export default App;
