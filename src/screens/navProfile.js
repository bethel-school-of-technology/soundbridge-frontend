
import React from 'react';
import './navProfile.css';
import Darrin from '../assets/images/DarrinDeal.jpg';

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
                  
                  <img id="profile-image" src={Darrin} alt="DarrinDeal" />
                </div>
                <div className="change-profile-img">
                  <a to="#" >Change</a>
                </div>
              </div>

              <div className="username-title ">
                <p>User</p>
                <h1>Darrin</h1>
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

