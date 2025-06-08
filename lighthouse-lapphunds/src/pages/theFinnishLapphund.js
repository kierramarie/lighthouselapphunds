import React from 'react';
import YoutubeEmbed from '../components/video';

const TheFinnishLapphund = () =>{
  return (
    <div className='page'>
      <div className='info'>
        <h2>Dog Breed Video: Finnish Lapphund</h2>
        <div className="content">
          <YoutubeEmbed embedId="BANecUsSFFw" />
        </div>
      </div>
    </div>
  );
}
export default TheFinnishLapphund;