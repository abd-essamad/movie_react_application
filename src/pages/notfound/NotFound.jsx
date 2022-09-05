import './notfound.css'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='notfound'>
      <h1>Oops!</h1>
      <p>404-Page Not Found!</p>
      <Link to='/' >
        <FaHome className='fahome'/>back to home
      </Link>
    </div>
  )
}

export default NotFound
