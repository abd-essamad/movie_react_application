import './trailer.css'
import { useContext,useEffect } from "react"
import { useParams, Link  } from "react-router-dom"
import {  FaArrowCircleLeft } from 'react-icons/fa'
import Spinner from '../spinner/Spinner'
import MovieShowContext from "../../context/movieshow/MovieShowContext"
const Trailer = () => {
    const {trailer, loading, getTrailer} = useContext(MovieShowContext)
  const params =useParams()
   useEffect(()=>{
      getTrailer(params.id)
   },[getTrailer,params.id])
   

  if(!loading){
    return (
    
    <div className='trailer'>
      <h2>{trailer.original_title}</h2>
     {/* eslint-disable-next-line*/}
      {trailer.videos.results.length !== 0 ? <iframe width="420" height="315"
           src={`https://www.youtube.com/embed/${trailer.videos.results[0].key}`}>
        </iframe>
         :
          <div className='trailer_notfound'>
            <h3>There is no Trailer for this movie </h3> 
            <Link to={`/movie/${trailer.id}`} >
               <FaArrowCircleLeft className='fahome'/>go back
            </Link>
          </div> }
      
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

export default Trailer
