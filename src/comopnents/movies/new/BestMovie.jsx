import './BestMovie.css'
import { Link } from 'react-router-dom'
const BestMovie = ({bestmovie}) => {
  return (
    <div className='movies__item' key={bestmovie.id}>
          <img src={`${process.env.REACT_APP_IMAGE_PATH + bestmovie.poster_path}`} alt="" />
          <h3>{bestmovie.original_title}</h3>
           <p style={{color: 'yellow',
          paddingRight: bestmovie.vote_average.toString().length === 1 ? '13px': '5px',
          paddingLeft: bestmovie.vote_average.toString().length === 1 ? '13px': '5px'}}>
             {bestmovie.vote_average}
           </p>
           <div className='movie__item_links'>
           <Link to={`/movie/${bestmovie.id}`}>Watch</Link>
           </div>
        </div>
  )
}

export default BestMovie
