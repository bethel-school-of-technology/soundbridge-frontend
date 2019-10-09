import React, { Component } from 'react';
import { Table, Button, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import './profile.css';


export default class Profile extends Component {

  state = {
    userId: '',
    name: '',
    email: '',
  }

  componentDidMount() {
    const userId = sessionStorage.getItem('userId');
    const name = sessionStorage.getItem('name');
    const email = sessionStorage.getItem('email');
    this.setState({
      userId,
      name,
      email,
    });
  }
  
  render() {
    const user = this.state;
    return (
      <div className="body">
        <Jumbotron>
          <h1 className="display-3">Account Overview</h1>
          <h2>Profile</h2>
          <Table>
            <thead>
              <tr>
                <th scope="row">Username</th>
                <br></br>
                <td>{user.name}</td>
              </tr>
            </thead>
            <tr>
              <th scope="row">Email</th>
              <br></br>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th scope="row">Password</th>
              <br></br>
              <td>*******</td>
            </tr>
          </Table>

          <Link to="/editProfile" id="editbtn"><Button className="secondary float-left">Edit Profile</Button></Link>


        </Jumbotron>
        <div>
          <Jumbotron>
            <h3>My Plan</h3>
            <h1 className="display-3">Sound Bridge Free</h1>
            <p className="lead">Search bands and play music in shuffle mode only, with ads.</p>
            <hr className="my-2" />
            <p>Enjoy unlimited streaming with premium!</p>
            <p className="lead">
              <Button className="secondary" onClick={() => { alert('Success!!! You are now part of the elite group of Premium Members!!!') }}>Join Premium</Button>


            </p>
          </Jumbotron>

        </div>
        <hr />
      </div>
    );
  }
}
