import { createContext, useReducer } from "react";
import MovieShowReducer from "./MovieShowReducer";
const MovieShowContext = createContext()

const MovieShow_URL = process.env.REACT_APP_MOVIEDB_URL
const MovieSearch_URL = process.env.REACT_APP_SEARCH_URL

export const MovieShowProvider = ({children}) =>{
    const initialState = {
        movies: [],
        loading: true
    }
    const [state, dispatch] = useReducer(MovieShowReducer, initialState)
  
  const searchMovies = async(term)=>{
    
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=9f126a85b004a4abac0345f69ea2a4f5&query=${term}`)

    const data = await response.json()
    dispatch({
      type: 'SEARCH_MOVIES',
      payload: data.results
  })
  console.log(data.results)
  }
    
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
    fetchMovies,
    searchMovies
  }}>
       {children}
  </MovieShowContext.Provider>
}
export default MovieShowContext