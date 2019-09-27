import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem
} from 'reactstrap';

export default class NavbarL extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <div>
            <Navbar className="navbar footer" color="light" dark expand="lg">
                <Nav className="ml-auto footer-nav" navbar>
                  <NavItem>
                    <Link to="/">Home</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/about">About</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/contact">Contact</Link>
                  </NavItem>
                </Nav>
            </Navbar>
          </div>
        </div>
  
      );
    }
  }