import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
import './Menu.css';

function Menu() {
  return (
    <div className="menu-class">
      
        <ul>
        <li>
        <Link to="/">Home</Link>
        <Link  to="/About">About</Link>
        <Link to="/Skills">Skills</Link>
        <Link to="/Contact">Contact</Link>
        <Link className="tap-me" to="/Hire">Hire Me</Link>
        </li>
        
      </ul>
    </div>
      

        
      
    
  );
}

function Mobilemenu() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="menu-item">
      <div className="tap-menu">
        <button onClick={toggleMenu} className="tap-me-menu">
        <MenuIcon/>
        </button>
        {menuVisible && <Menu />}
      </div>
    </div>
  );
}

export default Mobilemenu;
