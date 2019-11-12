import React, { Component } from 'react';
import { getQuotes } from '../../api';
import {
  Card,
  CardBody,
  
  ListGroupItem,
  ListGroup
} from 'reactstrap';

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
        <div style={{ margin: '80px auto' }}>
          <h1>Messages</h1>
          {data.map(x => {
            return (
              <Card key={x.id}>
                <CardBody>
                  <ListGroup>
                    <ListGroupItem>first name: {x.name}</ListGroupItem>
                    <ListGroupItem>message: {x.description}</ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>
            );
          })}
        </div>
      );
    }
  }
}
