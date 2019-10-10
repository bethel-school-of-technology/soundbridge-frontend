import React from 'react';
import {
  Container, Label, Col, Row, Input, FormGroup, Button, Form,
  Card, CardHeader, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, CardBlock, Textarea
} from 'reactstrap';
import './Home.css';

const Home = () => (
  <div>


    {/* <div className="home-page-content page-header section-dark" style={{
      backgroundImage:
        "url(" + require("../assets/images/SoundBridge.jpg") + ")"
    }} > */}

      {/* <Container className="App">
        <Form className="form">
          <FormGroup>
            <Label for="Text" className="h2"><h2>Create Post</h2></Label>
            <Input type="textarea" className="text" id="Post"
              placeholder="Share Your Thoughts"
            /> */}

            <div>
              <Card style={{ width: '18rem' }}>
                <CardBody className=".card">
                  <CardTitle>Card Title</CardTitle>
                  <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle>
                  <CardText >
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </CardText>
                    <FormGroup>
                  <CardLink href="#" >Card Link</CardLink><br></br>
                  <CardLink href="#">Another Link</CardLink>
                  </FormGroup>
                </CardBody>
              </Card>

    
            </div>

          {/* </FormGroup> */}
          {/* <Button className="btn">Post</Button> <Button className="btn2">Add Photo/Video</Button> */}
        {/* </Form>

      </Container> */}
   <div className="filter"> 
        <div className="content-center"></div>

      </div> 


     </div>
  // </div>
);

export default Home;