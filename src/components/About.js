import React from 'react';
import './About.css';
import { CardImg } from 'reactstrap';

export default function About() {
  return (
    <div className='about-container'>
      <h2>About Us</h2>
      <article>
        <h3>Welcome to Summit Minibuses!</h3> We are a Sevenoaks based company
        offering 24/7 professional and reliable minibus service to any
        destinations in the UK. <br />
        <CardImg top width='100%' src='/img/aircon.jpg' alt='aircon' />
        Including: airport transfers, day trips, sports events, corporate
        events, festivals, school trips, special events, city breaks, weddings,
        etc. <br />
        <CardImg top width='100%' src='/img/euro6.jpg' alt='euro6' />
        To make your journey pleasant, comfortable and safe, our vehicles are
        fitted with 3 point seat belts, with head restraints, air con, reading
        lights, privacy tinted windows, reclining seats with arm rest. <br />
        <CardImg top width='100%' src='/img/overhead.jpg' alt='locker' />
        We look forward to welcoming you!{' '}
      </article>
    </div>
  );
}
