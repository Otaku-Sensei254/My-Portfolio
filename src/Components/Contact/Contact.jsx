import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Contact.css'
import { FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Footer from '../Footer/Footer';
import Mobilemenu from '../../Menu/Menu'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "13b0a273-42bb-4565-985f-81dd4234104b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="men">
    <Mobilemenu/>  
    </div>
    
    <div className="talk">
      <h1 className='talk-h1'>Get in touch<FaEnvelope className='envolope'/> </h1>
      <form onSubmit={onSubmit}>
        <label>Enter your name</label>
        <input type="text" name="name"  placeholder='Enter your name'required/>
        <label>Enter your email</label>
        <input type="email" name="email" placeholder='Enter your email'required/>
        <label>Enter your Mobile No</label>
        <input type='number' name='number' placeholder='Enter Mobile number'/>
        <textarea name="message" rows="6" placeholder='type your message' required></textarea>

        <button className="sub-btn"type="submit">Submit Message</button>

      </form>
    <span>{result}</span>
    
    </div>
    <div className="conta-link">
 <div className="socials2">
    <div className="footer-right">
                    <div className="socials2">
                        <p className='links-p'>Visit My Socials</p>
                        <Link to="https://wa.me/+254775037380" target='blank'><li><FaWhatsapp className='whts2'/>  </li></Link>
                      <Link to="https://www.facebook.com/profile.php?id=100067194083389&mibextid=ZbWKwL" target='blank'> <li><FaFacebook className='fbck2'/></li></Link>
                       <Link to="https://www.instagram.com/dhuhuinc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='blank'><li><FaInstagram className='insta2'/></li></Link>
                       <Link to="https://github.com/Otaku-Sensei254" target='blank'><FaGithub className='git2'/></Link>

                    </div>
                    
            </div>     
    </div>
    
            </div>
    </>
  )
}

export default Contact