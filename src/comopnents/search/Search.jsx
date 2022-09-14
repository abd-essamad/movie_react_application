import './search.css'
import {toast} from 'react-toastify'
import { useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import MovieShowContext from '../../context/movieshow/MovieShowContext'
const Search = () => {
  const [text, setText] = useState('')
  const navigate = useNavigate()
  const { searchMovies,movies} = useContext(MovieShowContext)
  const handleChange = (e)=>{
     setText(e.target.value)
  }

  const handleSubmit = (e)=>{
   e.preventDefault()
   if(text === ''){
    toast.error('Please enter a movie name')
   }else {
    /* */
        searchMovies(text)
        setText('')
        if(movies.length === 0){
          toast.error('there is no movie with this name');
          navigate('/');
          
        }
        
   }
  }

     return (
    <div className="search">
      <form onSubmit={handleSubmit}>
      <input value={text} onChange={handleChange} type="text" placeholder="Enter a movie..." />
      <button type='submit'>
        Search 
      </button>
      </form>
    </div>
  )
  
 
}

export default Search
