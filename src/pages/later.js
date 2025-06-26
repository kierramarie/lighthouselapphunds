import React from 'react';
import LitterCard from '../components/litterCard';
import JohnnyPic from '../photos/males/johnny.jpg';
import MateoPic from '../photos/males/mateo.jpeg';
import VictoriaPic from '../photos/females/victoria.jpg';
import TansyPic from '../photos/females/tansy.jpg';

const Later = () => (
  <div className='page'>
    <div className='info'>
        <h2>Future Litters</h2>
        <div className="content">
          <div className='cardList'>
            <LitterCard male='' female='' names='Casey and Ikea' time='Fall 2024' />
            <LitterCard male={JohnnyPic} female={TansyPic} names='Tansy and Johnny' time='Winter 2024' />
            <LitterCard male='' female='' names='Triscuit and Ikea' time='Spring 2025' />
            <LitterCard male={MateoPic} female={VictoriaPic} names='Victoria and Mateo' time='Spring 2024' />
            <LitterCard male='' female='' names='Bonnie and Usher' time='TBD' />
          </div>
        </div>
    </div>
  </div>
);

export default Later;