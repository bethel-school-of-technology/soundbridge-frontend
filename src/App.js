import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    
      <h1>Account Overview</h1>
    <br></br>

    <h5>Profile</h5>
    <br></br>

    <div class="container">
        <form>
            <div class="form-group row">
                <label for="input1">Username</label>
                <input type="text" class="form-control" id="input1" placeholder="Username">
            </div>
            <div class="form-group row">
                <label for="input2">Email</label>
                <input type="text" class="form-control" id="input2" placeholder="Email">
            </div>
            <div class="form-group row">
                <label for="input2">Date of birth</label>
                <input type="text" class="form-control" id="input2" placeholder="Date of birth">
            </div>
            <div class="form-group row">
                <label for="input2">Country</label>
                <input type="text" class="form-control" id="input2" placeholder="Country">
            </div>
        </form>
    </div>

    <br></br>

    <button class="btn btn-outline-dark"style="background-color: #d4c81b;">Edit Profile</button>  <button class="btn btn-outline-dark"style="background-color: #d4c81b;">My Plan</button> <button class="btn btn-outline-dark"style="background-color: #d4c81b;">My Account</button> 
    
    
    </div>
  );
}

export default App;
