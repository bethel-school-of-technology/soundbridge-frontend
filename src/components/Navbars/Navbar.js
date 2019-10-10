import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/Branding/finalLogo2.svg';
import logoImg from '../../assets/Branding/LogoImg.svg';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { Animated } from "react-animated-css";


export default class NavbarL extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.state = {
        isOpen: false,
    };
}
componentWillMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
}
componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
}

toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
}
closeNavbar() {
    this.setState({
        isOpen: false
    });
}
handleClickOutside(event) {
    const t = event.target;
    if (this.state.isOpen && !t.classList.contains('navbar-toggler')) {
        this.closeNavbar();
    }
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
                  <Link to="/home" onClick={this.closeNavbar} >Home</Link>
                </NavItem>
                <NavItem>
                  <Link to="/nav-profile">Profile</Link>
                </NavItem>
                <NavItem>
                  <Link to="/profile">Overview</Link>
                </NavItem>
                <NavItem>
                  <Link to="/contact">Contact</Link>
                </NavItem>
                <NavItem>
                  <Link to="/sign-up"><a className="btn btn-outline-light btn-sm logout-btn" href="/">Logout</a></Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>

    );
  }
}