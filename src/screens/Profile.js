import React, { Component } from 'react';
import { Table, Button, Jumbotron } from 'reactstrap';
import './profile.css';


export default class Profile extends Component {
  render() {
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
                <td>MAAC</td>
              </tr>
            </thead>
            <tr>
              <th scope="row">Email</th>
              <br></br>
              <td>Soundbridge@gmail.com</td>
            </tr>
            <tr>
              <th scope="row">Date of birth</th>
              <br></br>
              <td>9/12/2019</td>
            </tr>
            <tr>
              <th scope="row">Country</th>
              <br></br>
              <td>U.S.A.</td>
            </tr>
            <tr>
              <th scope="row">Password</th>
              <br></br>
              <td>*******</td>
            </tr>
          </Table>
          <br></br>
          <a href="/editProfile" id="editbtn"><Button className="secondary float-left">Edit Profile</Button></a>
          

        </Jumbotron>
        <div>
          <Jumbotron>
            <h3>My Plan</h3>
            <h1 className="display-3">Sound Bridge Free</h1>
            <p className="lead">Search bands and play music in shuffle mode only, with ads.</p>
            <hr className="my-2" />
            <p>Enjoy unlimited streaming with premium!</p>
            <p className="lead"><br></br>
            <Button className="secondary" onClick={() => {alert('Success!!! You are now part of the elite group of Premium Members!!!')}}>Join Premium</Button>
              
    
            </p>
          </Jumbotron>
         
        </div>
        <hr />
      </div>
    );
  }
}
