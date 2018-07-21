import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
   render() {
      return(
         <div>
            <Grid>
               <Cell col={4}>
                  <div style={{textAlign: 'center'}}>
                     <img
                        src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                        alt="avatar"
                        style={{height: '200px'}}
                     />
                  </div>

                  <h2 style={{paddingTop: '2em'}}>Kazi Rahamatullah</h2>
                  <h4 style={{color: 'grey'}}>Programmer</h4>
                  <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                  <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                  <h5>Address</h5>
                  <p>1 Hacker Way Menlo Park, 94025</p>
                  <h5>Phone</h5>
                  <p>01753362960</p>
                  <h5>Email</h5>
                  <p>md.kazi.rahmat@gmail.com</p>
                  <h5>Web</h5>
                  <p>mywebsite.com</p>
                  <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
               </Cell>
               <Cell className='resume-right-col' col={8}>
                  <h2>Education</h2>

                  <Education
                     startYear={2008}
                     endYear={2010}
                     schoolName="Noapara Model School"
                     schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  /> 

                  <Education
                     startYear={2010}
                     endYear={2012}
                     schoolName="Noapara College"
                     schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />  

                  <Education
                     startYear={2013}
                     endYear={2017}
                     schoolName="University of Asia Pacific"
                     schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  /> 

                  <hr style={{borderTop: '3px solid #e22947'}}/> 

                  <h2>Experience</h2>
                  <Experience
                     startYear={2017}
                     endYear={'Present'}
                     jobName='First Job'
                     jobDescription='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
                  />

                  <hr style={{borderTop: '3px solid #e22947'}}/>

                  <h2>Skills</h2>
                  <Skills
                     skill='HTML5/CSS3'
                     progress={100}
                  />
                  <Skills
                     skill='JavaScript'
                     progress={85}
                  />
                  <Skills
                     skill='VueJs'
                     progress={90}
                  />
                  <Skills
                     skill='React'
                     progress={87}
                  />
                  <Skills
                     skill='NodeJs'
                     progress={84}
                  />
                  <Skills
                     skill='MongoDB'
                     progress={95}
                  />
                  <Skills
                     skill='Laravel'
                     progress={90}
                  />
                  <Skills
                     skill='PHP'
                     progress={93}
                  />
                  <Skills
                     skill='MySql'
                     progress={92}
                  />
                  <Skills
                     skill='Sass'
                     progress={95}
                  />
               </Cell>
            </Grid>
         </div>
      )
   }
}

export default Resume;
