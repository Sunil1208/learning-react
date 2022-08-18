import React from "react";
import UserCard from './components/userCard/UserCard';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleUserChange = this.handleUserChange.bind(this);
      this.state = {
        users: [
          {
            name: "John",
            age: 23,
            email: "john@gmail.com",
            linkedIn: "https://www.google.com",
            picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_CnXCVc09ywVh9vSWhbl2xWBS3DpP1GV8icKqyU4x&"
            // picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:sdfasfsdfdsfsdfwfiofewfU4x&"
          },
          {
            name: "Derek",
            age: 30,
            email: "derek@gmail.com",
            linkedIn: "https://www.google.com",
            picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_CnXCVc09ywVh9vSWhbl2xWBS3DpP1GV8icKqyU4x&s"
          },
          {
            name: "Marshal",
            age: 20,
            email: "marshal@gmail.com",
            linkedIn: "https://www.google.com",
            picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_CnXCVc09ywVh9vSWhbl2xWBS3DpP1GV8icKqyU4x&s"
          },
          {
            name: "Peter",
            age: 25,
            email: "peter@gmail.com",
            linkedIn: "https://www.google.com",
            picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_CnXCVc09ywVh9vSWhbl2xWBS3DpP1GV8icKqyU4x&s"
          },
          {
            name: "Tony",
            age: 23,
            email: "tony@gmail.com",
            linkedIn: "https://www.google.com",
            picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_CnXCVc09ywVh9vSWhbl2xWBS3DpP1GV8icKqyU4x&s"
          },
        ],
        selectedEmail: null,
        selectedUser: null
      }
  }

  handleUserChange(e){
    const email = e.target.value;
    const getUser = this.state.users.filter((user) => user.email === email)[0];
    this.setState({
      selectedEmail: email,
      selectedUser: getUser
    });
  }

  
  render(){
    return (
      <div className="App">
      <div className="card-container">
          <label htmlFor="user">Choose a car:</label>
          <select
              id="user"
              placeholder="Select a user"
              onChange={this.handleUserChange}
          >
              {
                this.state.users.map((user, index) => {
                  return(
                    <option value={user.email}>{user.name}</option>
                  )
                })
              }
          </select>

          {
            this.state.selectedUser !== null && (
              <UserCard user={this.state.selectedUser}/>
            )
          }
      </div>
      </div>
    );
  }
}

export default App;
