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
    this.getFilteredUsersForText(text).then(
      filteredUsers =>
      this.setState({filteredUsers:filteredUsers})
    ).catch(err => console.log(err))
  }

  // filterUsers(e) {
  //   const text = e.currentTarget.value;
  //   const filteredUsers = this.getFilteredUsersForText(text)
  //   this.setState({
  //     filteredUsers
  //   });
  // }

  getFilteredUsersForText(text) {
    return new Promise(resolve => {
      const time = (Math.random() + 1) * 250;
      setTimeout(() => {
        const filteredUsers = allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()));
        resolve(filteredUsers);
      }, time) ;
    });
  }

  // getFilteredUsersForText(text) {
  //   return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
  // }

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
