import React from 'react';
import { Container, Label, Col, Row, Input, FormGroup, Button, Form } from 'reactstrap';
import './Home.css';

const Home = () => (
  <div>
     

    <div className="home-page-content page-header section-dark" style={{
      backgroundImage:
        "url(" + require("../assets/images/SoundBridge.jpg") + ")"
    }} >
  
     <Container className="App">
       
        <Form className="form">
         
            <FormGroup>
           
            <Label for="Text" className="h2"><h2>Create Post</h2></Label>
              
            <Input type="textarea" className="text" id="Post" 
                placeholder="Share Your Thoughts" 
              />
              
              
            </FormGroup>
            
          <Button className="btn">Post</Button> <Button className="btn2">Add Photo/Video</Button> 
          
        </Form>
      </Container>
    


      <div className="filter">
      
        <div className="content-center"></div>
      </div>

    </div>
   

  </div>

);

export default Home;