import React from 'react'
import './Hero.css'
import myself from '../Images/D-Huhu.png'
import html from '../Images/html2.png'
import Js from '../Images/Js2.png'
import react from '../Images/react4.png'
import Css from '../Images/CSS4.png'
import About from '../About/About'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    
   <section className="hero-container"> 
    < div className="hero-content">
        <h1>Hi there, I am Dennis Huhu.</h1>
            <h2>Frontend Developer</h2>
        <p>Creative Website Developer with objectives
             to making and providing optimum and purposeful 
             services that you need and works for you.</p>
    </div>
        <NavLink to="/Skills"><button className='Ex-btn'>Explore More</button></NavLink>
        {/*<NavLink to="/Skills"><button className='Abt-btn'>About Me</button></NavLink>*/}
    <div className="hero-img">
    </div><img src={myself}alt="" className="myself"/>
      <div className="page-icons">
    
          
          <div className="Links">
            <div className="tech-icons">
            <img src={html} alt="" className="html-logo"/>
            </div>
            <div className="tech-icons">
            <img src={Js} alt="" className="js-logo"/>
            </div>
            <div className="tech-icons">
            <img src={react} alt="" className="react-logo"/>
            </div>
            <div className="tech-icons">
            <img src={Css} alt="" className="css-logo"/>
          </div>
          </div>

      </div>
      
   </section>
    
   
  )
}

export default Hero