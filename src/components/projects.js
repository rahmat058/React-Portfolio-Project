import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
   constructor(props) {
      super(props);
      this.state = {
         activeTab: 1
      }
   }

   toogleCategories() {
      if(this.state.activeTab === 1) {
         return(
            <div className='projects-grid'>
               {/* Project #1 */}
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i2.wp.com/shivalgupta.com//wp-content/uploads/2017/08/react.png?resize=640%2C480) center / cover'}}> React Project #1</CardTitle>
                  <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                  </CardText>
                  <CardActions border>
                     <Button colored>GitHub</Button>
                     <Button colored>CodePen</Button>
                     <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                     <IconButton name='share'/>
                  </CardMenu>
               </Card>

               {/* Project #2 */}
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i2.wp.com/shivalgupta.com//wp-content/uploads/2017/08/react.png?resize=640%2C480) center / cover'}}> React Project #2</CardTitle>
                  <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                  </CardText>
                  <CardActions border>
                     <Button colored>GitHub</Button>
                     <Button colored>CodePen</Button>
                     <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                     <IconButton name='share'/>
                  </CardMenu>
               </Card>

               {/* Project #3 */}
               <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i2.wp.com/shivalgupta.com//wp-content/uploads/2017/08/react.png?resize=640%2C480) center / cover'}}> React Project #3</CardTitle>
                  <CardText>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                  </CardText>
                  <CardActions border>
                     <Button colored>GitHub</Button>
                     <Button colored>CodePen</Button>
                     <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                     <IconButton name='share'/>
                  </CardMenu>
               </Card>
            </div> 
         )
      }else if(this.state.activeTab === 0) {
         return(
            <div><h1>This is Angular Tab</h1></div>
         )
      }else if(this.state.activeTab === 2) {
         return(
            <div><h1>This is VueJS Tab</h1></div>
         )
      }else if(this.state.activeTab === 3) {
         return(
            <div><h1>This is MongoDB Tab</h1></div>
         )
      }else {
         return(
            <div><h1>This is Laravel Tab</h1></div>
         )
      }
   }

   render() {
      return(
         <div className='category-tabs'>
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
               <Tab>Angular</Tab>
               <Tab>React</Tab>
               <Tab>VueJS</Tab>
               <Tab>MongoDB</Tab>
               <Tab>Laravel</Tab>
            </Tabs>

            <Grid>
               <Cell col={12}>
                  <div className='content'>
                     {this.toogleCategories()}
                  </div>
               </Cell>
            </Grid> 
         </div>
      )
   }
}

export default Projects;
