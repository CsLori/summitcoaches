import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { getQuoteByID } from '../../api';
import './Reply.css';
import { navigate } from '@reach/router';

export default class Reply extends Component {
  state = {
    data: [],
    isLoading: true,
    amount: '',
    link: ''
  };
  componentDidMount() {
    this.fetchQuoteByID();
  }

  fetchQuoteByID = () => {
    getQuoteByID(this.props.id).then(data => {
      this.setState({ data, isLoading: false });
    });
  };
  sendEmail = e => {
    const REACT_APP_EMAIL_KEY = process.env.REACT_APP_EMAIL_KEY;
    e.preventDefault();

    if (window.confirm('Are you sure you want to send this?')) {
      emailjs
        .sendForm('summitcoaches', 'toCustomer', e.target, REACT_APP_EMAIL_KEY)
        .then(
          result => {
            alert('Email has been sent!');
            navigate('/quotes');
            console.log(result.text);
          },
          error => {
            console.log(error.text);
          }
        );
    }
  };

  pay = e => {
    const PAYPAL_NAME = process.env.REACT_APP_PAYPAL_NAME;
    const value = e.target.value;
    this.setState(() => ({
      amount: value,
      link: `<a href=https://paypal.me/${PAYPAL_NAME}/GBP${value}><img src="https://static.wixstatic.com/media/323cec_d6537f4254c644e19467207167fa0514~mv2.png/v1/fill/w_259,h_168,al_c,lg_1,q_90/323cec_d6537f4254c644e19467207167fa0514~mv2.webp"/> </a>`
    }));
  };

  render() {
    const { data, amount, isLoading, link } = this.state;
    if (isLoading) return <p>Loading...</p>;

    return (
      <>
        <Form className='contact-form' onSubmit={this.sendEmail}>
          <Label>Amount To Pay</Label>
          <Input
            type='number'
            name='amount'
            onChange={this.pay}
            value={amount}
          ></Input>
          <FormGroup>
            <Label>Name</Label>
            <Input type='text' name='user_name' defaultValue={data.fullName} />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input type='email' name='user_email' defaultValue={data.email} />
          </FormGroup>
          <FormGroup>
            <Label>From</Label>
            <Input type='text' name='from' defaultValue={data.cityFrom.city} />
          </FormGroup>
          <FormGroup>
            <Label>To</Label>
            <Input type='text' name='to' defaultValue={data.cityTo.city} />
          </FormGroup>
          <FormGroup>
            <>
              <Label>Message</Label>
              <Input
                name='message'
                rows='10'
                type='textarea'
                placeholder='Type your message here'
              />
              <Input
                id='transparent'
                name='link'
                rows='5'
                type='textarea'
                defaultValue={link}
              />
            </>
          </FormGroup>
          <Button size='md' outline color='primary' type='submit' value='Send'>
            Reply
          </Button>
        </Form>
      </>
    );
  }
}
