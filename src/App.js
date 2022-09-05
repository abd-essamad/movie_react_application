import Navbar from './comopnents/navbar/Navbar'
import About from './pages/about/About'
import Home from './pages/home/Home'
import { BrowserRouter as  Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">

      <Routes>
      <Navbar/>
      <Home/>
       
      </Routes>
    </div>
     
  );
}

export default App;
