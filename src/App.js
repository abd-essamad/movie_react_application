import Navbar from './comopnents/navbar/Navbar'
import About from './pages/about/About'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './comopnents/footer/Footer'
import NotFound from './pages/notfound/NotFound'
import Home from './pages/home/Home'
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { MovieShowProvider } from './context/movieshow/MovieShowContext'
import MovieProfile from './comopnents/movies/MovieProfile';
function App() {
  return (
    <MovieShowProvider>
    <Router>
    <div className="App">
    <Navbar/>
    
      <div className='main'>
      <Routes>
          <Route path='/' element={<Home />}  />
          <Route path='/about' element={<About />}  />
          <Route path='/*' element={<NotFound />}  />
          <Route path='/movie/:id' element={<MovieProfile />}  />
      </Routes>
      </div>
      
    <Footer/>
    </div>
    </Router>
    <ToastContainer position='top-left' autoClose={1000}  />
    </MovieShowProvider >
    
  );
}

export default App;
