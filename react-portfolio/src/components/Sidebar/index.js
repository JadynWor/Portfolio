import { NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/free-brands-svg-icons'
import { faHome,faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (

<div className='nav-bar'>
   <NavLink exact="true" activeclassname="active" to="/">
      <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
   </NavLink>

   <NavLink exact="true" activeclassname="active" to="/about">
      <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
   </NavLink>

   <NavLink exact="true" activeclassname="active" to="/contact">
      <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
   </NavLink>
</div>

)

export default Sidebar