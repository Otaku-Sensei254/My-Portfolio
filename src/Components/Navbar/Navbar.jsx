import React from 'react'
import Logo from '../Images2/transparent2.png'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
 

function Navbar () {
  const navLinkStyles = ( {isActive})=>{
    return{
      fontWeight:isActive ? 'Bold':'normal',
      textDecoration: isActive ? 'none': 'underline',
    }
  }
  
  

  return (
    <>
      
    <div className="header">

        <NavLink to="/"><img src={Logo} className="Logo"/></NavLink>
        
      </div>
        
        <div className="navbar">
        <div className="links">
              <NavLink style={navLinkStyles}to="/">Home</NavLink>
              <NavLink  style={navLinkStyles}to="/About">About</NavLink>
              <NavLink style={navLinkStyles}to="/Skills">Skills</NavLink>
              <NavLink style={navLinkStyles}to ="/Contact"> Contact</NavLink>
              
            <NavLink className="Hire-btn" to="/Contact">Hire Me</NavLink>

          </div>
          
          



          
        
            

            
        
       
        
        
       
        
    </div>
    
    
    </>
  )
}

export default Navbar