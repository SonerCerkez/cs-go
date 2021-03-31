import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/roxanne1.mp4' autoPlay loop /> 
      <h1 >Prishtina Esport Public | ESP</h1>
      <br />
      <br />
      <br />
      <div className="adress">
      <p > IP Address Prishtina 1 : 164.132.201.27:27068</p>
      <p > IP Address Prishtina 2 : 54.36.233.169:27015</p>
      </div>
      <br />
      <br />       
      <br />
        <div className="admins">
      <p style={{color: "#ff7600"}}  >Head Admin: ≽Joker≼ </p>
      <p style={{color: "#00a000"}}  >Head Admin:  - Spark </p>
      <p style={{color: "#0000ff"}}  >Head Admin:  - Boss </p>
      <p style={{color: "#bf0040"}}  >Head Admin:  - chérie </p>
      <p style={{color: "#4000bf"}} >Head Admin:  - nad!.</p>
      </div>
      <div className="design">
        <h1 style={{color: "#2ada70"}} >Web design: Boss</h1>
      </div>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;