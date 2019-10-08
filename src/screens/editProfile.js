import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './editProfile.css';



export default class editProfile extends React.Component {
    render() {
        return (
            <div className="profilebody">

                <Form className="editProfile" >
                    <FormGroup>
                   <br>
                   </br>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Password" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="confirmPassword">Confirm Password</Label>
                        <Input type="password" name="password" id="confirmPassword" placeholder="Confirm Password" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Date of Birth</Label><br></br>
                        <Input type="DOB" name="DOB" id="DOB" placeholder="MM/DD/YYYY" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="country">Country</Label>
                        <Input type="country" name="country" id="country" placeholder="Country" />
                    </FormGroup>
                            <br></br>
                        <Link to="/profile"><Button className="secondary col-text-center" id="editbtn">Cancel</Button></Link>{' '}

                        <Button className="secondary float-center" id="editbtn" onClick={() => {alert('Save Yourself!!!')}}>Save</Button>
                   
                </Form>
            </div>
        );
    }
}

