import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './login.css';
import { Button, Form, FormGroup, Label, Input, Navbar, NavItem, NavLink, Nav } from 'reactstrap';
import Home from '../../screens/Home';
import About from '../../screens/About';
import Contact from '../../screens/Contact';


class Login extends React.Component {
  render() {
    return (
      <Navbar className="absolute">
        {<Nav>
          <Router>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">Disabled Link</NavLink>
            </NavItem>


            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Router>
        </Nav>}
        <Form inline className="justify-content-end">
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">Email</Label>
            <Input size="sm" type="email" name="email" id="exampleEmail" />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">Password</Label>
            <Input size="sm" type="password" name="password" id="examplePassword" />
          </FormGroup>
          <Button size="sm" color="light">Login</Button>
          {/* <Alert color="light" size="sm"><a href="/" className="alert-link">Forgot Password?</a></Alert> */}
        </Form>
      </Navbar>
    );
  }
}

export default Login;