import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const linkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          Dr. Shkodrani <span>Klinika Dentare</span>
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
