import React from 'react';
import { future } from '../utils/litters';
import LitterCard from '../components/litterCard';

const Later = () => (
  <div className='page'>
    <div className='info'>
        <h2>Future Litters</h2>
        <div className="content">
          <div className='cardList'>
            {future.map((litter, idx) => (
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

export default Later;