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
            <div className="navbar-footer" color="light">
                <Nav className="footer-nav" navbar>
                <NavItem>
                  <h5>SoundBridge .co</h5>
                </NavItem>
                </Nav>
            </div>
          </div>
        </div>
  
      );
    }
  }