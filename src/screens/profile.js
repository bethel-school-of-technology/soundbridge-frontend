
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
import './Profile.css';
import ImageUploader from 'react-images-upload';

import { Input, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (

      <div>

        {/* ----- Page Display Start ----- */}
        <div className="main-display-container">

          <div className="top-page-display-container">

            <div className="img-and-username-container row">

              <div className="profile-img-container ">
                <div className="profile-img">
                  <ImageUploader
                    withIcon={true}
                    buttonText='Choose images'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                  />
                  <img id="profile-image" src="" alt="Image Preview" />
                </div>
                <div className="change-profile-img">
                  <Input type="file" name="file" id="exampleFile" />
                </div>
              </div>

              <div className="username-title ">
                <h1>User's Name</h1>
              </div>

            </div> {/*----- End img-and-username-container ----- */}

            <div className="profile-nav-tabs">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                  >
                    Songs
                    </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                  >
                    Playlists
                    </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => { this.toggle('3'); }}
                  >
                    Posts
                    </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col className="song-col" sm="4">
                      <div className="songs" >Title</div>
                      <ul>
                        <li></li>
                      </ul>
                    </Col>
                    <Col className="song-col" sm="4">
                      <div className="songs" >Artist</div>
                      <ul>
                        <li></li>
                      </ul>
                    </Col>
                    <Col className="song-col" sm="4">
                      <div className="songs" >Date</div>
                      <ul>
                        <li></li>
                      </ul>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="3">
                      <div className="playlist-img">Playlist</div>
                      <div className="playlist-title">Title</div>
                    </Col>
                    <Col sm="3">
                      <div className="playlist-img">Playlist</div>
                      <div className="playlist-title">Title</div>
                    </Col>
                    <Col sm="3">
                      <div className="playlist-img">Playlist</div>
                      <div className="playlist-title">Title</div>
                    </Col>
                    <Col sm="3">
                      <div className="playlist-img">Playlist</div>
                      <div className="playlist-title">Title</div>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>
                    <Col sm="12">
                      <Card body>
                        <CardTitle>Post Section</CardTitle>

                        <Button className="profile-btn">Post</Button>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </div>


          </div> {/*----- top-page-display-container ----- */}

          <div className="bottom-page-container">

          </div>

        </div> {/*----- End Main display Container ----- */}

      </div>
    );
  }
}

