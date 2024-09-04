import React from 'react';
import PhotoCard from '../components/photoCard';
import RingoPic from '../photos/males/ringo.jpg';

const Gallery = () => (
  <div className='page'>
    <div className='info'>
        <div className='subheading'>
            <p>Gallery</p>
        </div>
        <div className='cardList'>
          <PhotoCard photo={RingoPic} title='' info='' />
        </div>
    </div>
  </div>
);

export default Gallery;