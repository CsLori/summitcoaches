import React, { Component, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Quote.css';
import { createQuote } from '../../api';

export default class Quote extends Component {
  state = {
    email: '',
    phonenumber: '',
    cityFrom: '',
    cityTo: '',
    name: '',
    description: '',
    dateFrom: new Date(),
    dateTo: ''
  };

  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    console.log(value, name);
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      email,
      phonenumber,
      cityFrom,
      cityTo,
      name,
      description,
      dateFrom,
      dateTo
    } = this.state;
    const quote = {
      email,
      phonenumber,
      cityFrom,
      cityTo,
      name,
      description,
      dateFrom,
      dateTo
    };
    createQuote(quote);
    // goMail(quote);
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              onChange={this.handleChange}
              type="email"
              required
              name="email"
              id="exampleEmail"
              placeholder="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Name</Label>
            <Input
              onChange={this.handleChange}
              type="name"
              required
              name="name"
              id="examplePassword"
              placeholder="Name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Phone Number</Label>
            <Input
              onChange={this.handleChange}
              type="phonenumber"
              required
              name="phonenumber"
              id="phonenumber"
              placeholder="Phone Number"
            />
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">Departure Date</Label>
            <Input
              onChange={this.handleChange}
              type="datetime-local"
              required
              name="dateFrom"
              id="dateFrom"
              placeholder="date"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Arrival Date</Label>
            <Input
              onChange={this.handleChange}
              type="datetime-local"
              required
              name="dateTo"
              id="dateTo"
              placeholder="date"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">City From</Label>
            <Input
              onChange={this.handleChange}
              type="city"
              required
              name="cityFrom"
              id="cityFrom"
              placeholder="City From"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">City To</Label>
            <Input
              onChange={this.handleChange}
              type="cityTo"
              required
              name="cityTo"
              id="cityTo"
              placeholder="City To"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Description</Label>
            <Input
              onChange={this.handleChange}
              rows="10"
              type="textarea"
              name="description"
              id="description"
              required
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </>
    );
  }
}
