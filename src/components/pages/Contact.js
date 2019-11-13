import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

import './Contact.css';
export default function Contact() {
  const style = {
    width: '100%',
    height: '100%',
    border: '6px solid black',
    boxSizing: 'border-box'
    // flexGrow: 3
  };

  return (
    <div className="contact-container">
      <Card style={{ flexGrow: '1' }}>
        <CardImg top width="100%" src="/img/logo.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Company details:</CardTitle>
          <CardText>
            <strong>Company:</strong> Summit Minibuses & Coaches LTD
            <br />
            <strong>Address:</strong> 128 MIDDLEFIELDS, Croydon, United Kingdom
            CR0 9LH,
            <br />
            <strong>Phone:</strong> 01732 666646 or 07563 190246 (Henry) <br />
            <strong>Email:</strong> sales@summitcoaches.co.uk
            <br />
            <strong>Company number:</strong> 11769964, Companies House, Cardiff
          </CardText>
        </CardBody>
      </Card>
      <div
        id="map-container-google-2"
        className="z-depth-1-half map-container"
        style={{ height: '500px' }}
      >
        <iframe
          src="https://maps.google.com/maps?q=128+middlefields+croydon+CR09LH&t=&z=13&ie=UTF8&iwloc=&output=embed"
          //   frameborder='0'
          style={style}
          title="address"
          //   allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
