import React from "react";

import "./userCard.css";

class UserCard extends React.Component {
    render(){
        console.log("this.props is ", this.props);
        const { user } = this.props;
        return(
            <div className="user-card-container">
              <div>Name: {user.name}</div>
              <div>Age: {user.age}</div>
              <div>Email: {user.email}</div>
              <div>
                Photo:
                  <img className="user-photo" src={user.picUrl} alt={user.name} />
              </div>
              <div>LinkedIn: 
                <a href={user.linkedIn} target="_blank">Click here to open linkedin</a>
              </div>
            </div>
        )
    }
};

export default UserCard;