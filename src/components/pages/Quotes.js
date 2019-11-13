import React, { Component } from "react";
import { getQuotes } from "../../api";
import { Card, CardBody, ListGroupItem, ListGroup, Button } from "reactstrap";
import "./Quotes.css";

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
        <div className="quotes" style={{ margin: "80px auto" }}>
          <h1>Messages</h1>
          {data.map(x => {
            console.log(x);
            return (
              <Card key={x.id}>
                <CardBody>
                  <ListGroup>
                    <div className="cardTop">
                      <div className="nameEmail">
                        <ListGroupItem>Name: {x.fullName}</ListGroupItem>
                        <ListGroupItem>Email: {x.email}</ListGroupItem>
                      </div>
                      <ListGroupItem>Date: {x.createdAt}</ListGroupItem>
                    </div>
                    <div className="msg">
                      <ListGroupItem>Message: {x.description}</ListGroupItem>
                    </div>
                  </ListGroup>
                  <Button
                    outline
                    color="primary"
                    type="submit"
                    href={`mailto:${x.email}`}
                  >
                    Reply
                  </Button>
                </CardBody>
              </Card>
            );
          })}
        </div>
      );
    }
  }
}
