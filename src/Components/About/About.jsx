import React from 'react'
import './About.css'
import Navbar from '../Navbar/Navbar'
import Me from '../Images/me.jpg'
import { Form, NavLink } from 'react-router-dom'
import CK from '../Images/Ck.+.png'
import EV from '../Images/Evogress.png'
import Hosi from '../Images/hosi.png'
import Shop from '../Images/Phones.png'
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";
import { Menu } from '@mui/material'
import Mobilemenu from '../../Menu/Menu'
const About = () => {
  return (
    <>
    <Mobilemenu/>
      <Navbar/>
      <div className="about-container">
      <div className="top"><h1 className='top-h1'>About Me</h1></div>
      <section className='Journey'>
          <p className='me-p'>
            I am fully motivated and focused to providing
            the best services to our client's and 
            making sure you communicate your message to the masses easier and in the best way.
          </p>
          <img className="me-pic"src='../Images/me.jpg' alt="" />
         <NavLink to="/Contact"><button className='contact-me'>Let's Talk</button></NavLink>
      </section>
      <section className='projects'>
        <h1 className='projects-h1'>My Projects</h1>
          <p className='projects-p'>I have worked on various
            projects and in each making our clients happy with
            the results. You can be one of those clients.
          </p>
          <div className="project-cards">
            <div className="card1">
              <h2>Event Planning</h2>
              <img src={CK} alt="" />
              <h4>Here is an Event Planning website showing the 
                services offered by the company
              </h4>
              <a className="web-link"href="https://ck-plus.vercel.app/" target='blank'>Learn More</a>
            </div>
            <div className="card2">
              <h2>Hospital Management</h2>
              <img src={Hosi} alt="" />
              <h4>This is a sample Hospital Login sign up page making
                Hospital logistics easily managable
              </h4>
              <a className="web-link"href="https://www.nah.or.ke/" target='blank'>Learn More</a>
            </div>
            <div className="card3">
              <h2>Public Relations</h2>
              <img src={EV} alt="" />
              <h4>This Public relations company can now relay their 
                thoughts and news to a wider scale by use of the 
                re  sponsive website.
              </h4>
              <a className="web-link"href="">Learn More</a>
            </div>
            <div className="card4">
              <h2>E-Commerce Webistes</h2>
              <img src={Shop} alt="" />
              <h4>This E-commerce website was designed to make shopping easy for 
                the business owner to manage his shop and customers 
                to do their shopping
              </h4>
              <a className="web-link"href="https://shifayephoneplace.vercel.app/" target='blank'>Learn More</a>
              </div>
          </div>
      </section>
      <section className='about-ft'>
          <div className="ft">
       <text> <FaPhoneAlt className='call-1' />+254 724 064302</text>
          </div>
      </section>
              
      </div>
      <div className="abt-ft">
        <Footer/>
        </div>
      
    </>
  )
}

export default About