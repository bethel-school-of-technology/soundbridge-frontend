import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/Branding/finalLogo2.svg';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
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
          <Navbar className="navbar" color="light" dark expand="lg">
            <Link className="name" to="/">{<img className="logoicon" src={logo} alt="logo"></img>}</Link>
            <NavbarToggler className="light" onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/">Home</Link>
                </NavItem>
                <NavItem>
                  <Link to="/about">About</Link>
                </NavItem>
                <NavItem>
                  <Link to="/contact">Contact</Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Account
                </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                    <Link to="/user/name/false/null/null">Profile</Link>
                  </DropdownItem>
                    <DropdownItem>
                    <Link to="/login">Login</Link>
                  </DropdownItem>
                    <DropdownItem>
                    <Link to="/sign-up">Sign Up</Link>
                  </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    <Link to="/sign-up">Logout</Link>
                  </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>

    );
  }
}