import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddBill from './Components/AddBills/AddBill';
// import AddFriend from './Components/AddFriends/AddFriends'
// import AddFriends from './Components/AddFriends/AddFriends';
import { ToastContainer } from 'react-toastify';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title" >Split Management App</div>
        <div className="Billblock" >
            <AddBill />
        </div>
        <div className="FriendBlock" >
            {/* <AddFriends /> */}
        </div>
        <ToastContainer autoClose={1000}/>
      </div>
    );
  }
}

export default App;
