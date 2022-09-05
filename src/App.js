import Navbar from './comopnents/navbar/Navbar'
import About from './pages/about/About'
import Footer from './comopnents/footer/Footer'
import NotFound from './pages/notfound/NotFound'
import Home from './pages/home/Home'
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    
      <div className='main'>
      <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/about' element={<About />}  />
          <Route path='/*' element={<NotFound />}  />
      </Routes>
      </div>
      
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
