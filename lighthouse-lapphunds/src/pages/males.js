import React from 'react';
import PhotoCard from '../components/photoCard';
import RingoPic from '../photos/males/ringo.jpg';
import JohnnyPic from '../photos/males/johnny.jpg';
import IkeaPic from '../photos/males/ikea.jpg';
import BlixPic from '../photos/males/blix.jpeg';
//import UsherPic from '../photos/males/usher.jpeg';
//import MauiPic from '../photos/males/maui.jpeg';
import MateoPic from '../photos/males/mateo.jpeg';
import WilcoPic from '../photos/males/wilco.jpg';
import BluePic from '../photos/males/blue.jpeg';

const Males = () => (
  <div className='page'>
    <div className='info'>
        <h2>Our Boys</h2>
        <div className="content">
          <div className='cardList'>
            <PhotoCard photo={RingoPic} title='Ringo (Lighthouse the Rhinestone Cowboy)' info='Grand Champion, Award of Merit Winner
  at Westminster and therapy certified. This young boy has great size, head, coat and
  temperament. Proven sire of two excellent litters. Available at stud to approved and
  health tested bitches only. Still actively showing, watch for him at shows!' />
            <PhotoCard photo={JohnnyPic} title="Johnny (Lighthouse Here's Johnny!!)" info='Our young boy, a Grand Champion by a year
  old Still actively showing and you will see him at Westminster next year. A proven
  natural stud with one litter of lovely pups, including our new showboy, Blue Skies.
  Excellent OFA hips, normal elbows, negative under Pawprints genetic testing, and a
  clear eyes CERF. Available at stud to approved females.' />
            <PhotoCard photo={IkeaPic} title='Ikea (Likkhu Jaldu)' info="Our Swedish import from a line almost extinct. Such an outcross.
  Ikea is our most active boy and is a great agility and Fast Cat runner. OFA Good hips,
  normal elbows, and Pawprints genetic free with perfect CAER (CERF) eyes. Will be
  available at stud to approved females." />
            <PhotoCard photo={BlixPic} title='Blix (Likkhu Gaddhi)' info='Our other Scandinavian import and not even related in any way
  to our other Likkhu boy. Grand Champion and FAST CAT champion with the fastest
  lapphund time in 2024. Great temperament, an active therapy dog, and available at
  stud to approved females. Good OFA hips, normal elbows, genetic clear per Embark,
  and clear eyes (CERF). Down in North Carolina with our partner Sue Kidder.' />
            <PhotoCard photo='' title='Usher (Usher Lanka Fire)' info="Our French import, and pending health testing. Great
  outcrossed pedigree and a true gentle soul. He is our gold sable boy or light golden cream." />
            <PhotoCard photo='' title='Maui (Lighthouse Puff the Magic Dragon)' info="Grand Champion and Award of Merit Winner
  at Westminster. Massive Coat, gorgeous face, and a great family dog. Fair hips,
  genetic testing negative, clear eyes (CERF) and normal elbows. Available at stud to
  approved bitches." />
            <PhotoCard photo={MateoPic} title="Mateo (Nakina's Mateo at Lighthouse)" info='Our youngest Grand Champion, from our
  friend and great longtime breeder, Nakina of Detroit. Great temperament, great flashy
  colors and coats, still actively showing, watch for him at Westminster next year. Too
  young yet but will have full health testing.' />
            <PhotoCard photo={WilcoPic} title='Wilco (Lighthouse Wilco Over and Out)' info="Our youngest boy, and a champion at 8
  months old. Love and shown by Sue and Jon Kidder of Waynesville, NC. Wilco was
  picked out of Emme's and Jacksons litter for his potential and he has shown it. Watch
  him this year as he shows!!!" />
            <PhotoCard photo={BluePic} title='Blue (Lighthouse Blue Skies)' info='A son of Johnny and Jolie (CH Doux Berger Shiny
  Flower), and just starting showing. Wonderful puppy loved and shown by Jessica
  Jordan of Nashua NH and her very talented 16 year old daughter Ava.' />
          </div>
        </div>
    </div>
  </div>
);

export default Males;