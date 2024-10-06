import React from 'react'
import './Footer.css'
import Logo from '../Images/D-Huhu.png'
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {

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
      setResult("Message sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='container'>
        <div className="footer-container">
            <div className="footer-1">
                <h5>D-Huhu Inc</h5>
                <div className="left-side1">
                    <img src={Logo} alt="image" className='footer-img' />
                <h4>Sample Projects</h4>
                
                    <li>E-Commerce Websites</li>
                    <li>Company Profiles</li>
                    <li>Hospital Management Websites</li>
                    <li>School Management Websites</li>
                    <li>Personal Portfolios</li>
                
                </div>
                
            </div>
            <div className="footer-centre">
                <form onSubmit={onSubmit}>
                    <input type="email" placeholder="email me" required/>
                    <input name="Phone number"type="number" placeholder="phone number" required/>
                    <textarea name="message" rows={5} placeholder='write your message here'></textarea>
                    <button type='submit' className='sub-btn1'>Send Message</button>
                    <span className='span1'>{result}</span>
                </form>
                
                
            </div>
            <div className="footer-right">
                    <div className="socials">
                        <p>Visit My Socials</p>
                        <Link to="https://wa.me/+254775037380" target='blank'><li><FaWhatsapp className='whts'/>  </li></Link>
                      <Link to="https://www.facebook.com/profile.php?id=100067194083389&mibextid=ZbWKwL" target='blank'> <li><FaFacebook className='fbck'/></li></Link>
                       <Link to="https://www.instagram.com/dhuhuinc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='blank'><li><FaInstagram className='insta'/></li></Link>
                       <Link to="https://github.com/Otaku-Sensei254" target='blank'><FaGithub className='git'/></Link>

                    </div>
                    
            </div>
            <div className="copyright">
                    <p className='cpy'>D-Huhu Inc <br/> copyright@2024 by D-Huhu Inc <FaPhoneAlt/>+254775037380</p>

                    </div>
        </div>
    </div>
  )
}

export default Footer

