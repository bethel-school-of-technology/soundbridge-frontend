import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/Branding/finalLogo2.svg';
import frontendUrl from '../../services/frontendUrl'
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
    this.closeNavbar = this.closeNavbar.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.state = {
      isOpen: false,
      loggedIn: 'false',
    };
  }

  componentDidMount() {
    const loggedIn = sessionStorage.getItem('loggedIn');
    this.setState({ loggedIn });
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

  logout = () => {
    sessionStorage.clear();
    window.location.href = frontendUrl;
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
    const userName = sessionStorage.getItem('name')
    return (
      <div>
        {
          this.state.loggedIn === 'true' ?
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
                      <Link to={`/user/${userName}`}>Profile</Link>
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
                      <Link to="/sign-up"><a className="btn btn-outline-light btn-sm logout-btn" href="/">Sign Up</a></Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/login"><a className="btn btn-outline-light btn-sm logout-btn" href="/">Login</a></Link>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
        }
        {/* <div>
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
      </div> */}
      </div>
    );
  }
}