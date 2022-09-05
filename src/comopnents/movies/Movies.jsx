import './movies.css' 
import { useEffect, useState } from 'react'
import Spinner from '../spinner/Spinner'
import logo from '../../assets/images/back2.png'
import Movie from './Movie'
const Movies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] =useState(true)
   useEffect(()=>{
      fetchMovies()
   },[])

  const fetchMovies = async()=>{
    const response = await fetch(`${process.env.REACT_APP_MOVIEDB_URL}`)

    const data = await response.json()
    setMovies(data.results)
    setLoading(false)
    console.log(data.results)
  }

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
