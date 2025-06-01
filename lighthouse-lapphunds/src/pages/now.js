import React from 'react';
import LitterCard from '../components/litterCard';
import JohnnyPic from '../photos/males/johnny.jpg';
import BirdeyPic from '../photos/females/birdey.jpg';
import JacksonPic from '../photos/males/jackson.jpg';

const Now = () => (
  <div className='page'>
    <div className='info'>
        <h2>Current Litters</h2>
        <div className='cardList'>
          <LitterCard male={JacksonPic} female='' names='Spirit and Jackson' time='Summer 2024' />
          <LitterCard male={JohnnyPic} female={BirdeyPic} names='Birdey and Johnny' time='Summer 2024' />
        </div>
    </div>
  </div>
);

export default Now;