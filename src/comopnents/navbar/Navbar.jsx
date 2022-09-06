import './navbar.css'
import { Link } from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className='navbar'>
       <div className="navbar__logo">
         <h1><span>M</span>ovie <span>S</span>how</h1>
       </div>
       <ul className="navbar__links">
         <li>
          <Link className='link' to='/'> <div><FaHome/></div> <p>Home</p>  </Link>
          </li>
         <li>
         <Link className='link' to='/about'> <div> <i class="fa-solid fa-circle-info"></i></div>  <p>Info</p></Link>
          </li>
         <li>
          <Link className='link' to='/signin'> <div className='signin'>Sign In</div></Link>
         </li>
       </ul>
    </nav>
  )
}

export default Navbar
