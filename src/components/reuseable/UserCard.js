import React, { Component } from 'react';
import { fetchUser } from '../../api';
import './UserCard.css';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

export default class UserCard extends Component {
  state = {
    user: null,
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    fetchUser(this.props.id).then(data => {
      const userData = {
        ...data,
        id: this.props.id
      };
      this.setState({ user: userData, isLoading: false });
    });
  };

  render() {
    const { user, isLoading, error } = this.state;
    if (isLoading) return 'Loading...';
    return (
      <div className='user-container'>
        {' '}
        <Card>
          <CardBody>
            <CardTitle>{user.firstname + ' ' + user.lastname}</CardTitle>
            <CardSubtitle>Profile Informations</CardSubtitle>
            <CardText>
              <ListGroup>
                <ListGroupItem>first name: {user.firstname}</ListGroupItem>
                <ListGroupItem>last name: {user.lastname}</ListGroupItem>
                <ListGroupItem>email: {user.email}</ListGroupItem>
                <ListGroupItem>address: {user.address}</ListGroupItem>
                <ListGroupItem>mobile: {user.number}</ListGroupItem>
              </ListGroup>
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
