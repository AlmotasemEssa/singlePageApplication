import React, { Component } from "react";
import UserCard from "./UserCard";
import AppToolbar from "./AppToolbar";
import { connect } from "react-redux";
import { ShowUsers } from "../actions/action";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  async componentWillMount() {
    await this.props.ShowUsers();
    const { users } = this.props;
    this.setState({ users });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ users: nextProps.users });
  }
  removeUser = id => {
    const filteredUsers = this.state.users.filter(el => el.id !== id);
    this.setState({
      users: filteredUsers
    });
    localStorage.setItem("usersList", JSON.stringify(filteredUsers));
  };
  render() {
    return (
      <div>
        <AppToolbar />
        <h1
          style={{
            fontSize: "2.5rem",
            marginTop: 0,
            marginBottom: "0.5rem",
            fontWeight: 500,
            fontFamily: "sans-serif"
          }}
        >
          Users List
        </h1>
        {this.state.users.length !== 0 ? (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {this.state.users.map(user => (
              <li key={user.id}>
                <UserCard
                  id={user.id}
                  removeUser={this.removeUser}
                  name={user.name}
                  surname={user.surname}
                  birthday={user.birthday}
                  gender={user.gender}
                  student={user.student}
                />
              </li>
            ))}
          </ul>
        ) : (
          "no users to show"
        )}
      </div>
    );
  }
}

export default connect(
  ({ userList: { users } }) => ({
    users
  }),
  { ShowUsers }
)(Home);
