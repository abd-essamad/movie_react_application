import './newmovies.css'
import { useEffect, useContext } from 'react'
import {FaStar} from 'react-icons/fa'
import BestMovie from './BestMovie'
import Spinner from '../../spinner/Spinner'
import MovieShowContext from '../../../context/movieshow/MovieShowContext'
function NewMovies() {
  const { getBestMovies,best,loading} = useContext(MovieShowContext)
  useEffect(()=>{
    getBestMovies()
 },[getBestMovies])

 if(!loading){
  return (
    <> 
    <h2 className='bestMovies__title'><FaStar className='star'/> 
    the highest rated movies <FaStar className='star' />  </h2>
    <div className='movies'>
    {best.map(bestmovie =>(
          <BestMovie  key={bestmovie.id} bestmovie={bestmovie}  />
        ))}
    </div>
    </>
  )
  }else {
     return <div className='movies'>
             <Spinner />
            </div>
  }
}

export default NewMovies
