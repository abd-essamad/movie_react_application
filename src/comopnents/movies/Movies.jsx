import './movies.css' 
import { useEffect, useState } from 'react'
import logo from '../../assets/images/back2.png'
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
        <div className='movies__item' key={movie.id}>
          <img src={`${process.env.REACT_APP_IMAGE_PATH + movie.poster_path}`} alt="" />
          <h3>{movie.original_title}</h3>
           <p style={{color: movie.vote_average > 7 ? 'yellow' : 'red' }}>
             {movie.vote_average}
           </p>
        </div>
        ))}
      </div>
    )
  }else {
    <h3>Loading...</h3>
  }

  
}

export default Movies
