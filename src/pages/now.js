import React from 'react';
import { current } from '../utils/litters';
import LitterCard from '../components/litterCard';

const Now = () => (
  <div className='page'>
    <div className='info'>
        <h2>Current Litters</h2>
        <div className="content">
          <div className='cardList'>
            {current.map((litter, idx) => (
              <LitterCard
                key={idx}
                {...litter}
              />
            ))}
          </div>
        </div>
    </div>
  </div>
);

export default Now;