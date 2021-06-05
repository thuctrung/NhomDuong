import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Video.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/video/video.mp4' autoPlay loop muted />
      <h1>THE BEST COFFEE TESTING EXPERIENCE</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Order now
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary-m'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          View Menu <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
