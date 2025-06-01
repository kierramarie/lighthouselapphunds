import React from 'react';
import PhotoCard from '../components/photoCard';

// Dynamically import all images from gallery folder
const importAll = (r) => {
  return r.keys().map((key) => {
    return {
      src: r(key),
      name: key.replace('./', '')
    };
  });
};

// Adjust this path to match your folder
const images = importAll(
  require.context('../photos/gallery', false, /\.(png|jpe?g|webp|heic|heif)$/)
);

// Helper: Format filename into a clean title
const formatTitle = (filename) => {
  // Remove extension
  let name = filename.replace(/\.[^/.]+$/, '');
  // Remove trailing numbers (e.g., "luna2" -> "luna")
  name = name.replace(/\d+$/, '');
  name = name.replaceAll("_", " ")
  // Capitalize first letter
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const Gallery = () => {
  return (
    <div className='page'>
      <div className='info'>
        <h2>Our Girls</h2>
        <div className="cardList">
          {images.map((img, idx) => (
            <PhotoCard
              key={idx}
              photo={img.src}
              title={formatTitle(img.name)}
              info=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
