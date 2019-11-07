import React from 'react';
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg
} from 'reactstrap';
import './Services.css';
export default function Services() {
  return (
    <div className='services-container'>
      <h2>Services</h2>
      <Card>
        <CardImg
          top
          width='100%'
          src='https://images2.minutemediacdn.com/image/upload/c_crop,h_1165,w_2078,x_0,y_123/f_auto,q_auto,w_1100/v1559320068/shape/mentalfloss/70705-istock-957174246.jpg'
          alt='daytrip'
        />
        <CardBody>
          <CardTitle>Day Trips</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Parties</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
        </CardBody>
        <CardImg
          bottom
          width='100%'
          src='https://www.interchoice.co.uk/images/webupload/holidays/blackpool-illuminations-day-trip_2x_large.jpg'
          alt='party'
        />
      </Card>
      <Card>
        <CardImg
          top
          width='100%'
          src='http://www.bridebox.com/blog/wp-content/uploads/2013/04/plan-destination-wedding.jpg'
          alt='wedding'
        />
        <CardBody>
          <CardTitle>Weddings</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Events</CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
        </CardBody>
        <CardImg
          bottom
          width='100%'
          src='https://in.bookmyshow.com/entertainment-news/wp-content/uploads/2017/10/Sports-Events.jpg'
          alt='events'
        />
      </Card>
    </div>
  );
}
