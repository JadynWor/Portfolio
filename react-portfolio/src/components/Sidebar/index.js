import { NavLink } from 'react-router-dom'
import './index.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/free-brands-svg-icons'
import { faHome,faUser } from '@fortawesome/free-solid-svg-icons'
import portrait from '../../react-portfolio/src/assets/images/portrait.jpeg'

const Sidebar = () => (

<div className='nav-bar'>
   <Link className='logo' to='/'>
      <img src={portrait} alt="logo"/>
   </Link>
   <nav>
   <NavLink exact="true" activeclassname="active" to="/">
      <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
   </NavLink>

   <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
      <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
   </NavLink>

   <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
      <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
   </NavLink>
   </nav>
</div>
)

export default Sidebar