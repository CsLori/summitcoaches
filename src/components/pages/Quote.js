import React, { Component, useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Tooltip,
  UncontrolledTooltip,
  FormFeedback,
  Alert
} from "reactstrap";
import "./Quote.css";
import { createQuote } from "../../api";
import { navigate } from "@reach/router";

export default class Quote extends Component {
  state = {
    quoteForm: {
      email: {
        email: "",
        isValid: false,
        validation: { isEmail: true }
      },
      phonenumber: {
        phonenumber: "",
        isValid: false,
        validation: {
          isNumeric: true,
          phoneNumLength: 10
        }
      },

      cityFrom: {
        cityFrom: "",
        isValid: false,
        validation: { minLength: 2 }
      },
      cityFromAddress: "",
      cityFromPostcode: "",
      cityTo: {
        cityTo: "",
        isValid: false,
        validation: { minLength: 2 }
      },
      cityToAddress: "",
      cityToPostcode: "",
      fullName: {
        fullName: "",
        isValid: false,
        validation: { minLength: 2 }
      },
      description: {
        description: "",
        isValid: true,
        validation: {}
      },
      dateFrom: {
        dateFrom: new Date(),
        isValid: true,
        validation: {}
      },
      dateTo: { dateTo: "", isValid: true, validation: {} },
      createdAt: {
        createdAt: new Date().toLocaleString(),
        isValid: true
      }
    },
    isFormValid: false
  };

  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    console.log(value, name);
    const quoteForm = { ...this.state.quoteForm };
    const updatedQuoteElement = { ...quoteForm[name] };

    updatedQuoteElement[name] = value;
    updatedQuoteElement.isValid = this.checkIfValid(
      updatedQuoteElement[name],
      updatedQuoteElement.validation
    );
    quoteForm[name] = updatedQuoteElement;
    let isFormValid = true;
    for (let name in quoteForm) {
      isFormValid = quoteForm[name].isValid && isFormValid;
      console.log(isFormValid, name);
    }
    this.setState({ quoteForm, isFormValid });
    // this.setState(prevState => ({
    //   ...prevState,
    //   quoteForm: {
    //     ...prevState.quoteForm,
    //     [name]: { ...prevState.quoteForm.name, [name]: value }
    //   }
    // }));
  };

  checkIfValid = (value, rules) => {
    console.log(rules);
    let isValid = true;
    if (!rules) {
      return true;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.phoneNumLength) {
      isValid = value.length === rules.phoneNumLength && isValid;
    }
    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }
    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    if (dateTo > dateFrom) {
      isValid = true && isValid;
    }
    if (new Date(dateFrom) >= new Date()) {
      isValid = true && isValid;
    }

    return isValid;
  };

  handleSubmit = e => {
    e.preventDefault();
    const { quoteForm } = this.state;
    const quote = {
      email: quoteForm.email.email,
      phonenumber: quoteForm.phonenumber.phonenumber,
      cityFrom: {
        city: quoteForm.cityFrom.cityFrom,
        postcode: quoteForm.cityFromPostcode.cityFromPostcode,
        address: quoteForm.cityFromAddress.cityFromAddress
      },
      cityTo: {
        city: quoteForm.cityTo.cityTo,
        postcode: quoteForm.cityToPostcode.cityToPostcode,
        address: quoteForm.cityToAddress.cityToAddress
      },
      fullName: quoteForm.fullName.fullName,
      description: quoteForm.description.description,
      dateFrom: quoteForm.dateFrom.dateFrom,
      dateTo: quoteForm.dateTo.dateTo,
      createdAt: quoteForm.createdAt.createdAt
    };
    confirm("Are you sure you want to send this?");
    if ("Are you sure you want to send this?") {
      createQuote(quote).then(() => {
        alert("Your quote has been submitted!");
        navigate("/");
      });
    }

    // goMail(quote);
  };

  render() {
    let styles = {
      textDecoration: "underline"
    };
    const { isFormValid, quoteForm, dateFrom } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">
              Email
              <UncontrolledTooltip placement="bottom" target="email">
                <div style={styles}>hdfjsdhfjsdhf</div>
              </UncontrolledTooltip>
            </Label>
            <Input
              onChange={this.handleChange}
              type="email"
              required
              name="email"
              id="email"
              placeholder="johndoe@gmail.com"
              valid={quoteForm.email.isValid}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              onChange={this.handleChange}
              type="name"
              required
              name="fullName"
              id="fullName"
              placeholder="John Doe"
              valid={quoteForm.fullName.isValid}
            />
          </FormGroup>
          <Label htmlFor="phonenumber" id="phonenumber">
            Mobile Phone Number
            <UncontrolledTooltip placement="bottom" target="phonenumber">
              <div style={styles}>hdfjsdhfjsdhf</div>
            </UncontrolledTooltip>
          </Label>
          <FormGroup id="phone">
            <Input
              style={{ width: "60px" }}
              disabled
              onChange={this.handleChange}
              size="3"
              type="phonenumber"
              required
              value="+44"
              name="phonenumber"
              id="phonenumber"
              placeholder="+447123456789"
            />
            <UncontrolledTooltip placement="bottom" target="phonenumber">
              <div style={styles}>hdfjsdhfjsdhf</div>
            </UncontrolledTooltip>
            <Input
              onChange={this.handleChange}
              // style={!isFormValid && { border: "1px solid red" }}
              // style={{ width: "20rem" }}
              type="phonenumber"
              required
              name="phonenumber"
              id="phonenumber"
              placeholder="7123456789"
              valid={quoteForm.phonenumber.isValid}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="departureDate">Departure Date</Label>
            <Input
              onChange={this.handleChange}
              type="datetime-local"
              required
              name="dateFrom"
              id="dateFrom"
              placeholder="11/12/2019"
              min="2019-11-20T00:00"
              min={new Date().toISOString().slice(0, 16)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="arrivalDate">Arrival Date</Label>
            <Input
              onChange={this.handleChange}
              type="datetime-local"
              required
              name="dateTo"
              id="dateTo"
              placeholder="16/12/2019"
              min={new Date(quoteForm.dateFrom.dateFrom)
                .toISOString()
                .slice(0, 16)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="cityFrom">City From</Label>
            <Input
              onChange={this.handleChange}
              type="city"
              required
              name="cityFrom"
              id="cityFrom"
              placeholder="London"
              valid={quoteForm.cityFrom.isValid}
            />
          </FormGroup>
          <div className="postcodeAddress">
            <FormGroup>
              <Label htmlFor="postcode">Postcode</Label>
              <Input
                onChange={this.handleChange}
                type="postcode"
                required
                name="cityFromPostcode"
                id="cityFromPostcode"
                placeholder="London"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="address">Address</Label>
              <Input
                onChange={this.handleChange}
                type="text"
                required
                name="cityFromAddress"
                id="cityFromAddress"
                placeholder="London"
              />
            </FormGroup>
          </div>
          <FormGroup>
            <Label htmlFor="cityTo">City To</Label>

            <Input
              onChange={this.handleChange}
              type="text"
              required
              name="cityTo"
              id="cityTo"
              placeholder="Edinburgh"
              valid={quoteForm.cityTo.isValid}
            />

            <FormFeedback tooltip>
              Oh noes! that name is already taken
            </FormFeedback>
          </FormGroup>
          <div className="postcodeAddress">
            <FormGroup>
              <Label htmlFor="postcode">Postcode</Label>
              <Input
                onChange={this.handleChange}
                type="postcode"
                required
                name="cityToPostcode"
                id="cityToPostcode"
                placeholder="London"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="address">Address</Label>
              <Input
                onChange={this.handleChange}
                type="text"
                required
                name="cityToAddress"
                id="cityToAddress"
                placeholder="London"
              />
            </FormGroup>
          </div>
          <FormGroup>
            <Label htmlFor="description">Description</Label>
            <Input
              onChange={this.handleChange}
              rows="10"
              type="textarea"
              name="description"
              id="description"
              placeholder="Share any additional information about your trip!"
            />
          </FormGroup>

          <Button
            size="md"
            outline
            color="primary"
            type="submit"
            disabled={!isFormValid}
          >
            Submit
          </Button>
        </Form>
      </>
    );
  }
}
