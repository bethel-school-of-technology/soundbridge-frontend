import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/Branding/finalLogo2.svg';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
            <NavbarBrand className="name" href="/">{<img className="logoicon" src={logo} alt="logo"></img>}</NavbarBrand>
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
                    <NavLink href="/profile">Profile</NavLink>
                  </DropdownItem>
                    <DropdownItem>
                    <Link to="/login">Login</Link>
                  </DropdownItem>
                    <DropdownItem>
                    <Link to="/sign-up">Sign Up</Link>
                  </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                    <NavLink href="/sign-up">Logout</NavLink>
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