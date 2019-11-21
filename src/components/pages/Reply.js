import React, { Component } from "react";
import emailjs from "emailjs-com";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { getQuoteByID } from "../../api";
import "./Reply.css";
import { navigate } from "@reach/router";

export default class Reply extends Component {
  state = {
    data: [],
    show: false,
    amount: 0
  };
  componentDidMount() {
    this.fetchQuoteByID();
  }

  fetchQuoteByID = () => {
    getQuoteByID(this.props.id).then(data => {
      this.setState({ data });
    });
  };
  sendEmail = e => {
    const REACT_APP_EMAIL_KEY = process.env.REACT_APP_EMAIL_KEY;
    e.preventDefault();
    confirm("Are you sure you want to send this?");
    if ("Are you sure you want to send this?") {
      console.log(e.target);
      emailjs
        .sendForm("summitcoaches", "toCustomer", e.target, REACT_APP_EMAIL_KEY)
        .then(
          result => {
            alert("Email has been sent!");
            navigate("/quotes");
            console.log(result.text);
          },
          error => {
            console.log(error.text);
          }
        );
    }
  };

  pay = e => {
    const value = e.target.value;
    this.setState(() => ({
      amount: value
    }));
  };
  handleSubmit = e => {
    alert("Are you sure:" + this.state.amount);
    e.preventDefault();
  };

  render() {
    const { data, amount, show } = this.state;
    const PAYPAL_NAME = process.env.REACT_APP_PAYPAL_NAME;
    console.log(PAYPAL_NAME);
    // const link = e => {
    //   return `<a href=https://paypal.me/gabortolgyesi/GBP${amount}> <img src="https://static.wixstatic.com/media/323cec_d6537f4254c644e19467207167fa0514~mv2.png/v1/fill/w_259,h_168,al_c,lg_1,q_90/323cec_d6537f4254c644e19467207167fa0514~mv2.webp"/> </a>`;
    // };
    if (data) {
      return (
        <>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label>Type payable amount</Label>
              <Input type="number" onChange={this.pay} defaultValue=""></Input>
            </FormGroup>
          </Form>
          <Form className="contact-form" onSubmit={this.sendEmail}>
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="text"
                name="user_name"
                defaultValue={data.fullName}
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" name="user_email" defaultValue={data.email} />
            </FormGroup>
            <FormGroup>
              <>
                <Label>Message</Label>
                <Input
                  name="message1"
                  rows="10"
                  type="textarea"
                  placeholder="Type your message here"
                />
                <Input
                  id="transparent"
                  name="message"
                  rows="5"
                  type="textarea"
                  value={`<a href=https://paypal.me/${PAYPAL_NAME}/GBP${amount}> <img src="https://static.wixstatic.com/media/323cec_d6537f4254c644e19467207167fa0514~mv2.png/v1/fill/w_259,h_168,al_c,lg_1,q_90/323cec_d6537f4254c644e19467207167fa0514~mv2.webp"/> </a>`}
                />
              </>
            </FormGroup>
            <Button
              size="md"
              outline
              color="primary"
              type="submit"
              value="Send"
            >
              Reply
            </Button>
          </Form>
        </>
      );
    }
  }
}
