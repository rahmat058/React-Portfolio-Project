import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component {
   render() {
      return(
         <div style={{ width: '100%',  margin:'auto'}}>
            <Grid className='mdl-grid landing-grid'> 
               <Cell col={12}>
                  <img 
                  src="https://www.shareicon.net/download/2015/09/18/103160_man_512x512.png" 
                  alt="avatar"
                  className='avatar-img'/>

                  <div className='banner-text'>
                     <h1>Full Stack Web Developer</h1>
                     <hr/>
                     <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | Vue | Node Js | Express | Mongo DB </p>
                     <div className='social-links'>
                        <a href="https://www.google.com" rel='noopener norefferrer' target='_blank'>
                           <i className='fa fa-google-plus-square' aria-hidden='true'></i>
                        </a>
                        <a href="https://www.google.com" rel='noopener norefferrer' target='_blank'>
                           <i className='fa fa-github-square' aria-hidden='true'></i>
                        </a>
                        <a href="https://www.google.com" rel='noopener norefferrer' target='_blank'>
                           <i className='fa fa-free-code-camp' aria-hidden='true'></i>
                        </a>
                        <a href="https://www.google.com" rel='noopener norefferrer' target='_blank'>
                           <i className='fa fa-youtube-square' aria-hidden='true'></i>
                        </a>
                        <a href="https://www.google.com" rel='noopener norefferrer' target='_blank'>
                           <i className='fa fa-facebook-square' aria-hidden='true'></i>
                        </a>
                     </div>
                  </div>
               </Cell>
            </Grid>
         </div>
      )
   }
}

export default LandingPage;
