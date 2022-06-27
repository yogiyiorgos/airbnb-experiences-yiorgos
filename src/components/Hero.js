import React from 'react';
import heroImg from '../images/photo-grid.png';

function Hero() {
  return (
    <section className='hero-section'>
      <img src={heroImg} alt='Hero grid' className='hero--grid' />
      <h1 className='hero--header'>Online Experiences</h1>
      <p className='hero--text'>
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
