import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
import Login from './Components/Login';
import FriendsList from './Components/FriendsList';
import AddFriend from './Components/AddFriend';
import Logout from './Components/Logout';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div>
            <h1>Friends Database</h1>
            <Link to= "login">Login</Link>
            <Link to= "friends">Friends List</Link>
            <Link to= "friends/add">Add Friend</Link>
            <Link to= "logout">Logout</Link>
          </div>
        </header>
        <Route exact path= "/">
          <Login />
        </Route>
        <Route exact path= "/login">
          <Redirect to= "/" />
        </Route>
        <PrivateRoute exact path = "/friends" component= {FriendsList}/>
        <PrivateRoute exact path= "/friends/add" component= {AddFriend}/>
        <PrivateRoute exact path= "/logout" component= {Logout}/>

      </div>
    </Router>
  );
}

export default App;
