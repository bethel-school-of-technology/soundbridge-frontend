import React from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './editProfile.css';
import logo from '../assets/Branding/finalLogo2.svg';


export default class editProfile extends React.Component {
    render() {
        return (
            <div className="profilebody">

                <Form className="editProfile" >
                    <FormGroup>
                    <img src={logo} alt="logo"></img><br></br>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="password" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="confirmPassword">Confirm Password</Label>
                        <Input type="password" name="password" id="confirmPassword" placeholder="Confirm password" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Date of Birth</Label><br></br>
                        <Label>Month</Label>
                        <Input type="select" name="month" id="monthSelect" placeholder="Month">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Day</Label>
                        <Input type="select" name="day" id="daySelect" placeholder="Day">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Decade</Label>
                        <Input type="select" name="decade" id="decadeSelect" placeholder="Decade">
                            <option>1920</option>
                            <option>1930</option>
                            <option>1940</option>
                            <option>1950</option>
                            <option>1960</option>
                            <option>1970</option>
                            <option>1980</option>
                            <option>1990</option>
                            <option>2000</option>
                            <option>2010</option>
                            <option>2020</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="country">Country</Label>
                        <Input type="country" name="country" id="country" placeholder="country" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">A little about yourself</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">Edit profile picture</Label>
                       
                                <Input type="file" name="file" id="exampleFile" />
                            
                           
                    </FormGroup>

                    <Button>Cancel</Button> <Button>Save Profile</Button>
                </Form>
            </div>
        );
    }
}
