import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Navbar.css'

function Navbar () {
  const linkClass = ({isActive}) => (isActive ? 'nav-link active' : 'nav-link')

  return (
    <header className="navbar">    git remote add vullnet02 https://github.com/vullnet02/d.git
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <img src={logo} alt="Klinika Dentare logo" className="navbar-logo-img" />
          <div>
            Dr. Shkodrani <span>Klinika Dentare</span>
          </div>
        </NavLink>
        <nav className="navbar-links">
          <NavLink to="/" className={linkClass} end>
            Ballina
          </NavLink>
          <NavLink to="/sherbimet" className={linkClass}>
            Shërbimet
          </NavLink>
          <NavLink to="/kontakt" className={linkClass}>
            Kontakt
          </NavLink>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `nav-link nav-link--admin${isActive ? ' active' : ''}`
            }
          >
            Admin
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
