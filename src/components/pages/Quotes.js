import React, { Component } from 'react';
import { getQuotes } from '../../api';
import { Card, CardBody, ListGroupItem, ListGroup, Button } from 'reactstrap';
import './Quotes.css';
import { Link, Router } from '@reach/router';
import Reply from './Reply';

export default class Quotes extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.fetchQuotes();
  }

  fetchQuotes = () => {
    getQuotes().then(data => {
      let quotes = [];
      for (let key in data) {
        const quotesData = {
          ...data[key],
          id: key
        };
        quotes.push(quotesData);
      }
      this.setState({ data: quotes });
    });
  };
  render() {
    const { data } = this.state;
    if (data) {
      return (
        <div className='quotes' style={{ margin: '80px auto' }}>
          <h1>Messages</h1>
          {data.map(x => {
            return (
              <Card key={x.id}>
                <CardBody>
                  <ListGroup>
                    <div className='cardTop'>
                      <div className='nameEmail'>
                        <ListGroupItem>
                          <strong>Name:</strong> {x.fullName}
                        </ListGroupItem>
                      </div>
                      <ListGroupItem>
                        <strong>Date Posted:</strong> {x.createdAt}
                      </ListGroupItem>
                    </div>
                    <ListGroupItem>
                      <strong>Email:</strong> {x.email}
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Phone:</strong> {x.phonenumber}
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>From: {x.cityFrom.city}</strong>,{' '}
                      {x.cityFrom.address}, {x.cityFrom.postcode},{' '}
                      {new Date(x.dateFrom).toLocaleString('en-GB')}
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong> To: {x.cityTo.city}</strong>, {x.cityTo.address},{' '}
                      {x.cityTo.postcode},{' '}
                      {new Date(x.dateTo).toLocaleString('en-GB')}
                    </ListGroupItem>
                    <ListGroupItem>
                      <strong>Passengers: </strong>
                      {x.passengers}
                    </ListGroupItem>
                    <ListGroupItem className='msg'>
                      <strong> Message:</strong> {x.description}
                    </ListGroupItem>
                  </ListGroup>
                  <Link to={`/quotes/${x.id}/reply`} data={x}>
                    <Button outline color='primary' type='submit'>
                      Reply
                    </Button>
                  </Link>
                </CardBody>
              </Card>
            );
          })}
        </div>
      );
    }
  }
}
