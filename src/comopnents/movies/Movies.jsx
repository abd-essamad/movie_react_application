import './movies.css' 
import { useEffect, useContext } from 'react'
import Spinner from '../spinner/Spinner'
import Movie from './Movie'
import MovieShowContext from '../../context/movieshow/MovieShowContext'
const Movies = () => {
  const {movies, loading, fetchMovies} = useContext(MovieShowContext)
   useEffect(()=>{
      fetchMovies()
   },[fetchMovies])
   
  
  if(!loading){
    return (
    
      <div className='movies'>
        {movies.map(movie =>(
          <Movie  key={movie.id} movie={movie}  />
        ))}
      </div>
    )
  }else {
    return (
    <div className='movies'>
       <Spinner/>
    </div>
    )
  }

  
}

export default Movies
