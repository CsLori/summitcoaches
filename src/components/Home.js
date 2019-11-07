import React, { Component } from 'react';

import './Home.css';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

export default class Home extends Component {
  render() {
    return (
      <>
        <img className='header-img' src='/img/header.jpg' alt='background' />
        <div className='home-container'>
          <Card>
            <CardImg top width='100%' src='/img/minibus1.jpg' alt='minibus' />
            <CardBody>
              <CardTitle>
                <h3> Minibus Hire</h3>
              </CardTitle>
              <CardText>
                <article>
                  Airport transfers, day trips, sports events, corporate events,
                  festivals, school trips, special events, city breaks,
                  weddings, etc.
                </article>
                For enquiries, please contact us at <br />{' '}
                <a href='mailto:sales@summitcoaches@co.uk'>
                  sales@summitcoaches@co.uk
                </a>
              </CardText>
            </CardBody>
          </Card>
        </div>
      </>
    );
  }
}
