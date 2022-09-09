import './movies.css'
import { Link } from 'react-router-dom'
const Movie = ({movie}) => {
  return (
    <div className='movies__item' key={movie.id}>
          <img src={`${process.env.REACT_APP_IMAGE_PATH + movie.poster_path}`} alt="" />
          <h3>{movie.original_title}</h3>
           <p style={{color: movie.vote_average > 5 ? 'yellow' : 'red',
          paddingRight: movie.vote_average.toString().length === 1 ? '13px': '5px',
          paddingLeft: movie.vote_average.toString().length === 1 ? '13px': '5px'}}>
             {movie.vote_average}
           </p>
           <div className='movie__item_links'>
           <Link to={`/movie/${movie.id}`}>Watch</Link>
           </div>
        </div>
  )
}

export default Movie
