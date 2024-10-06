import React from 'react'
import './Skills.css'
import Navbar from '../Navbar/Navbar'
import Frontend from '../Images/frontend2.jpeg'
import Backend from '../Images/backend2.jpeg'
import Soft from '../Images/Softskills.png'
import Mobilemenu from '../../Menu/Menu'
import Footer from '../Footer/Footer'

function Skills() {
  return (
    <div>
      <Navbar/>
      
      <Mobilemenu/>  
      
      
      <div className="SKILLS">
      <div className="skills-card">
          <div className="card">  
                    <h2>Technical Abilities</h2>
                <div className="front-end">
                  <h3>Front End</h3>
                  <img className="front"src={Frontend} alt="" />
                    <h4>HTML 5</h4>
                      <div className="html-stat">
                          <div className="prog" >88%</div>
                      </div>
                      <h4>React Js</h4>
                      <div className="React-stat">
                          <div className="React-prog" >80%</div>
                      </div>
                      <h4>CSS</h4>
                      <div className="CSS-stat">
                          <div className="CSS-prog" >75%</div>
                      </div>
                      
                </div>
          </div>
          <div className="back-end">
              <h3>Back End</h3>
                <img className="back"src={Backend} alt="" />
                  <h4 className='py'>Python</h4>
                  <div className="py-stat">
                    <div className="py-prog">60%</div>
                  </div>
                  <div className="php-cont">
                    <h4 className='php-4'>PHP</h4>
                    <div className="php-stat">
                      <div className="php-prog">40%</div>
                  </div>
                  </div>
                    <div className="SOFTS">
                    <div className="soft-skills">
                        <h2>Soft Skills</h2>
                            <img className='soft' src={Soft} alt="" />
                            <div class="progress-bar-container">
                                  <h2>
                                  <label for="html">Communication</label>
                               </h2>
                                <div className="communicate">
                                  <div class="progress-bar html">95%
                           <progress id="html" min="0" max="100" value="92"></progress>
                                </div>
                          </div>
                        </ div>
                        <div className="creativity">
                          <div class="progress-bar-container">
                          
                           <label className='create' for="css">Creativity</label>
                          
                          <div class="progress-bar css"> 80%
                           <progress id="css" min="0" max="100" value="80"></progress>
                          </div>
                        </div>
                    </div>
                        </div>
                        <div className="teamwork">
                          <h2>
                              <label for="js">Teamwork</label>
                            </h2>
                            <div class="progress-bar js"> 70%
                              <progress id="js" min="0" max="100" value="73"></progress>
                           </div>
                          </div>
                        </div>
                        <div class="progress-bar-container">
                  </div>
                    
                    
          </div>
      </div>
      
      </div>
    </div>
  )
}

export default Skills
