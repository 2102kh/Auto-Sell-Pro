
import { Link } from 'react-router-dom'

const NavBarMenu = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to={''}>About Company</Link>
            </li>
            <li>
                <Link to={''}>Our Services</Link>
            </li>
            <li>
                <Link to={''}>Contact</Link>
            </li>
            <li>
                <Link to={''}>Auto</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBarMenu