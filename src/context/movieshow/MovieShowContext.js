import { createContext, useReducer } from "react";
import MovieShowReducer from "./MovieShowReducer";
const MovieShowContext = createContext()

const MovieShow_URL = process.env.REACT_APP_MOVIEDB_URL


export const MovieShowProvider = ({children}) =>{
    const initialState = {
        movies: [],
        movie:{},
        loading: true
    }
    const [state, dispatch] = useReducer(MovieShowReducer, initialState)
  
    //search movies
  const searchMovies = async(term)=>{
    
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=9f126a85b004a4abac0345f69ea2a4f5&query=${term}`)

    const data = await response.json()
    dispatch({
      type: 'SEARCH_MOVIES',
      payload: data.results
  })
  }
  
  //get single movie
  const getMovie = async(id)=>{
    
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9f126a85b004a4abac0345f69ea2a4f5`)
    
    const data = await response.json()
    dispatch({
      type: 'GET_MOVIE',
      payload: data
  })
  console.log(data)
  }
  
  //fetch movies
  const fetchMovies = async()=>{
    const response = await fetch(`${MovieShow_URL}`)

    const data = await response.json()
    
    dispatch({
        type: 'GET_MOVIES',
        payload: data.results
    })
    console.log(data.results)
  }

  return <MovieShowContext.Provider value={{
    movies: state.movies,
    loading: state.loading,
    movie:state.movie,
    fetchMovies,
    searchMovies,
    getMovie

   
  }}>
       {children}
  </MovieShowContext.Provider>
}
export default MovieShowContext