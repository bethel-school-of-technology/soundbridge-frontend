import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import './editProfile.css';




export default class editProfile extends React.Component {
    constructor(props) {
        super(props)

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            userId: '',
            email: '',
            password: '',
        };
    };

    componentDidMount() {
        const userId = sessionStorage.getItem('userId');
        this.setState({
            userId,
        });

    }

    onChangeEmail = event => {
        this.setState({
            email: event.target.value
        });
    }

    onChangePassword = event => {
        this.setState({
            password: event.target.value
        });
    }




    onSubmit = async event => {
        event.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password,
        };


        // axios.put(`https://soundbridge.herokuapp.com/api/user/editProfile/${this.state.userId}`, user)
        axios.put(`http://localhost:4000/api/user/editProfile/${this.state.userId}`, user)
            .then(res => {
                const user = res.data;
                if (!user) {
                    console.log('Error No User Found')
                } else {
                    sessionStorage.setItem('userId', user._id);
                    sessionStorage.setItem('email', user.email);
                    this.setState({ user });
                }
            })
            .catch(e => console.log(e));
    }


    render() {
        return (
            <div className="profilebody">

                <Form className="editProfile" >
                    <FormGroup>
                        <br>
                        </br>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Password" onKeyUp={this.check}  value={this.state.password} onChange={this.onChangePassword} />
                    </FormGroup>
                    <div id="message"></div>
                    <Link to="/profile" className="edit-profile-link"><Button className="secondary col-text-center" id="editbtn">Cancel</Button></Link>
                    <Button className="secondary float-center" id="editbtn" onClick={this.onSubmit }>Save</Button>

                </Form>
            </div>
        );
    }
}