import { Link, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import logo from './Pages/Blog/Images/logo.png';
import './Layout.css'; // Import the CSS file
import { useState } from 'react';

export default function Layout() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBecomeMemberClick = () => {
    navigate('/pricing');
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the menu after clicking a menu item
  };

  return (
    <div className="layout">
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="webtitle">RISHIKUL</h1>
        </div>
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <ul className="navList">
            <li className="navItem">
              <Link to="/" className="navLink" onClick={closeMenu}>Home</Link>
            </li>
            <li className="navItem">
              <Link to="/about" className="navLink" onClick={closeMenu}>About</Link>
            </li>
            <li className="navItem">
              <Link to="/Classes" className="navLink" onClick={closeMenu}>Classes</Link>
            </li>
            <li className="navItem">
              <Link to="/pricing" className="navLink" onClick={closeMenu}>Pricing</Link>
            </li>
            <li className="navItem">
              <Link to="/myblog" className="navLink" onClick={closeMenu}>Blog</Link>
            </li>
            <li className="navItem">
              <Link to="/contact" className="navLink" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
          <button onClick={handleBecomeMemberClick} className="becomeMemberButton">Become a Member</button>
        </nav>
        <div className={`menu-btn ${menuOpen ? 'menu-btn-active' : ''}`} onClick={toggleMenu}>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
