import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import editProfile from './screens/editProfile';
import profile from './screens/profile';


export default class App extends React.Component {
  render() {
    return (


      <div>
        <Router>
              <Route exact path="/profile" component={profile} />
              <Route exact path="/editProfile" component={editProfile} />
            </Router>
        
      </div>
    );
  }
}
//  const Child = () => (
//     <div>
//       <h2>Edit My Profile</h2>
//      </div>
//   );
// class editProfile extends Component {
//   render() {
//     return (
//       <div>
//         <h2></h2>
//       </div>
//     )
//   }
// }

// class myPlan extends Component {
//   render() {
//     return (
//       <div>
//         <h2>My Plan</h2>
//       </div>
//     )
//   }
// }
// export default class App extends React.Component {
//   render() {
//     return (
      // <div>

//         <div>
//         <h1>Account Overview</h1>
//         <h2>Profile</h2>
//       </div>
//       <div>
//         <Table bordered>
//           <thead>
//             <tr>
//               <th>Username</th>
//               <br></br>
//               <td>Mike</td>
//             </tr>
//           </thead>

//             <tr>
//               <th scope="row">Email</th>
//               <br></br>
//               <td>Something@gmail.com</td>

//             </tr>
//             <tr>
//               <th scope="row">Date of birth</th>
//               <br></br>
//               <td>1/11/1982</td>
//             </tr>
//             <tr>
//               <th scope="row">Country</th>

//               <br></br>
//               <td>U.S.A.</td>
//             </tr>
//          </Table>
//          </div>
//          <div>
//          <Button outline color="secondary">Edit Profile</Button>{' '}
//          {/* <Nav>
//           <NavLink href="#">Edit </NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
//         </Nav> */}
//          </div>

        
//       </div>
   
//     )
//   }
// }





//  export default class App extends Component {}
//   render() {
//      return (

//       )
//   }
//  }

// const Child = () => (
//   <div>
//     <h2>Edit My Profile</h2>
//   </div>
// )
// class EditProfile extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Edit</h2>
//       </div>
//     )
//   }
// }

// class myPlan extends Component {
//   render() {
//     return (
//       <div>
//         <h2>My Plan</h2>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'));
