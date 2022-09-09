import { useContext,useEffect } from "react"
import './movieprofile.css'
import { useParams , Link } from "react-router-dom"
import { FaHome } from "react-icons/fa"
import MovieShowContext from "../../context/movieshow/MovieShowContext"
const MovieProfile = () => {
  const {movie, loading, getMovie} = useContext(MovieShowContext)
  const params =useParams()
   useEffect(()=>{
      getMovie(params.id)
   },[])
   /*
   if you are wondering why i put this genres in array and not fetching them from the API
  becauste some movie doesn't have the genred field !!
   */
    const genres = ['Drama', 'Romance','Thrill', 'Action'] 
    const fetchRandomGenres = ()=>{
      return Math.floor(Math.random()  * genres.length )
    }
  return (
    <div className="movieProfile">
      <div className="top">
        <div className="top_img">
        <img src={`${process.env.REACT_APP_IMAGE_PATH + movie.poster_path}`} alt="" />
        </div>
        
        <div className="top_right">
        
          <div className="top_right_title">
            <h1>{movie.original_title}</h1>
           
            <p className="drama">{genres[fetchRandomGenres()]}</p>
            <p className="mystery">{genres[fetchRandomGenres()]}</p>
            <p className="romance">{genres[fetchRandomGenres()]}</p> 
            
            
            
          </div>
         
          <div className="top_right_links">
          <Link to=''>watch</Link>
          <Link to=''>download</Link>
          </div>
          <div className="top_right_bottom">
             <div className="info">
               <p className="muted-text">release_date</p>
               <p>{movie.release_date}</p>
             </div>
             <div className="info">
               <p className="muted-text">original language</p>
               <p>{movie.original_language ==='en' ? 'English' : 'francais'}</p>
             </div>
             <div className="info">
               <p className="muted-text">budget</p>
               {movie.budget ? <p>{movie.budget +'$'}</p> : 'unkown' }
             </div>
          </div>
        </div>
      </div>

      <div className="center">
        <div className="box">
          <div className="left">
            <p className="muted-text">revenue</p>
              <p>{movie.revenue}</p> 
          </div>
          <FaHome className="icon"/>
        </div>

        <div className="box">
          <div className="left">
            <p className="muted-text">popularity</p>
            <p>{movie.popularity}</p> 
          </div>
          <FaHome className="icon"/>
        </div>

        <div className="box">
          <div className="left">
            <p className="muted-text">vote count</p>
            <p>{movie.vote_count}</p> 
          </div>
          <FaHome className="icon"/>
        </div>

        <div className="box">
          <div className="left">
            <p className="muted-text">vote average</p>
            <p>{movie.vote_average}</p> 
          </div>
          <FaHome className="icon"/>
        </div>
      </div>

      <div className="bottom">
        <h1>overview</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
    
  )
}

export default MovieProfile
