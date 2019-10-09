import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/Branding/finalLogo2.svg';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';


export default class NavbarL extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      loggedIn: false,
    };
  }

  componentDidMount() {
    const loggedIn = sessionStorage.getItem('loggedIn');
    this.setState({ loggedIn });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logout = () => {
    sessionStorage.clear();
    window.location.href = 'http://localhost:3000/'
  }

  render() {
    return (
      <div>
        {
          this.state.loggedIn ?
            <div>
              <Navbar className="navbar" color="light" dark expand="lg">
                <Link className="name" to="/">{<img className="logoicon" src={logo} alt="logo"></img>}</Link>
                <NavbarToggler className="light" onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <Link to="/home">Home</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/user/:name">Profile</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/profile">Overview</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/contact">Contact</Link>
                    </NavItem>
                    <NavItem>
                      <Link onClick={this.logout} to="/"><a className="btn btn-outline-light btn-sm logout-btn" href="/">Logout</a></Link>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
            :
            <div>
              <Navbar className="navbar" color="light" dark expand="lg">
                <Link className="name" to="/">{<img className="logoicon" src={logo} alt="logo"></img>}</Link>
                <NavbarToggler className="light" onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <Link to="/home">Home</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/contact">Contact</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/login"><a className="btn btn-outline-light btn-sm logout-btn" href="/">Login</a></Link>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
        }
      </div>
    );
  }
}