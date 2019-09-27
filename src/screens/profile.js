import React from 'react';
import axios from 'axios';
import { Table, Button, Jumbotron, } from 'reactstrap';
import UserPage from '../components/SpofityApiTest/UserPage';
import SpotifyApiTest from '../components/SpofityApiTest/SpotifyApiTest';
import './profile.css';

export default class Profile extends React.Component {

  state = {
    accessToken: '',
    spotifyInfo: {},
    playlists: {},
    playlistsDisplay: { 'display': 'none' },
  }

  componentDidMount() {
    const params = this.props.location.state.info;
    axios.post('http://localhost:4000/has-spotify/' + params.spotifyRefreshToken)
      .then(res => {
        this.setState({
          accessToken: res.data,
        }, () => {
          fetch('https://api.spotify.com/v1/me', {
            headers: {
              'Authorization': 'Bearer ' + this.state.accessToken,
            }
          }).then(res => res.json())
            .then(data => this.setState({ spotifyInfo: data }));
        });
      });
  }

  render() {
    const params = this.props.location.state.info;
    const user = this.state.spotifyInfo;
    const accessToken = (this.state.accessToken);
    if (params.spotify && !accessToken) {
      return <h1>Loading</h1>
    }
    return (
      <div className="body">
        {
          !params.spotify ?
            <SpotifyApiTest /> :
            <UserPage
              params={params}
              spotifyInfo={user}
              accessToken={accessToken}
            />
        }
        <Jumbotron>
          <h1 className="display-3">Account Overview</h1>
          <h2>Profile</h2>
          <Table>
            <tbody>
              <tr>
                <th scope="row">Username</th>
                <td>MAAC</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th scope="row">Email</th>
                <td>Soundbridge@gmail.com</td>
              </tr>
              <tr>
                <th scope="row">Date of birth</th>
                <td>9/12/2019</td>
              </tr>
              <tr>
                <th scope="row">Country</th>
                <td>U.S.A.</td>
              </tr>
              <tr>
                <th scope="row">Password</th>
                <td>*******</td>
              </tr>
            </tbody>
          </Table>
          <p className="lead">
          </p>
          <a href="/editProfile" id="editProfile"><Button class="btn btn-secondary">Edit Profile</Button></a>

        </Jumbotron>
        <div>
          <Jumbotron>
            <h3>My Plan</h3>
            <h1 className="display-3">Sound Bridge Free</h1>
            <p className="lead">Search bands and play music in shuffle mode only, with ads.</p>
            <hr className="my-2" />
            <p>Enjoy unlimited streaming with premium!</p>
            <p className="lead">
              <Button class="btn btn-secondary">Join Premium</Button>
            </p>
          </Jumbotron>
        </div>
        <hr />
      </div>
    );
  }
}
