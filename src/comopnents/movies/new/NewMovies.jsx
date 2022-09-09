import './newmovies.css'
import { useState,useEffect, useContext } from 'react'
import {FaStar} from 'react-icons/fa'
import BestMovie from './BestMovie'
import MovieShowContext from '../../../context/movieshow/MovieShowContext'
function NewMovies() {
  const { getBestMovies,best,loading} = useContext(MovieShowContext)
  useEffect(()=>{
    getBestMovies()
 },[])

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
     return <h2>loading....</h2>
  }
}

export default NewMovies
