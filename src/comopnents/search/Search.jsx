import './search.css'
import {toast} from 'react-toastify'
import { useState, useContext } from 'react'
import MovieShowContext from '../../context/movieshow/MovieShowContext'
const Search = () => {
  const [text, setText] = useState('')
  const { searchMovies} = useContext(MovieShowContext)
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
