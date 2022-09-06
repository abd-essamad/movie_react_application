import './header.css'
import Search from '../search/Search'

const Header = () => {
  return (
    <div className='header'>
        <Search/>
        <h1><i class="fa-solid fa-angle-left"></i></h1>
        <h1><i class="fa-solid fa-angle-right"></i></h1>
    </div>
  )
}

export default Header
