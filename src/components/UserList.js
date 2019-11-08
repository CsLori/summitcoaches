import React, { Component } from 'react';
import { fetchUsers } from '../api';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from '@reach/router';

export default class UserList extends Component {
  state = {
    users: [],
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    fetchUsers().then(data => {
      const users = [];
      for (let key in data) {
        const userData = {
          ...data[key],
          id: key
        };
        users.push(userData);
      }
      this.setState({ users, isLoading: false });
    });
  };

  render() {
    const { users, isLoading, error } = this.state;

    if (isLoading) return 'Loading...';
    console.log(users);
    return (
      <div>
        {users.map(user => (
          <ListGroup key={user.id}>
            <Link to={`/users/${user.id}`}>
              <ListGroupItem>
                {user.firstname + ' ' + user.lastname}
              </ListGroupItem>
            </Link>
          </ListGroup>
        ))}
      </div>
    );
  }
}
