import * as React from 'react'
import logo from './logo.svg';
import './App.css';
import UsersList from './UserList';

const allUsers = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania'];


class App extends React.Component {

  constructor(){
    super();

    this.state = {
      filteredUsers: allUsers
    };
  }

  filterUsers(e) {
    const text = e.currentTarget.value;
    const filteredUsers = this.getFilteredUsersForText(text)
    this.setState({
      filteredUsers
    });
  }

  getFilteredUsersForText(text) {
    return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
  }

  render() {
    return (
      <div>
        <input onInput={this.filterUsers.bind(this)} />
        <UsersList users={this.state.filteredUsers} />
      </div>
    );
  }
}

export default App;
