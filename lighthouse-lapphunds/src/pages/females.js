import React from 'react';
import PhotoCard from '../components/photoCard';
import BirdeyPic from '../photos/females/birdey.jpg';
import JoyPic from '../photos/females/joy.jpg';
import LillibetPic from '../photos/females/lillibet.jpg';
import VictoriaPic from '../photos/females/victoria.jpg';
import TansyPic from '../photos/females/tansy.jpg';

const Females = () => (
  <div className='page'>
    <div className='info'>
        <h2>Our Girls</h2>
        <div className='cardList'>
            <PhotoCard photo='' title='Triscuit (Triscuit Lanka Fire)' info='One of our French imported girls. On a Christmas trip
to Paris, I brought home Triscuit and Tansy, my two French girls. Tansy loved showing,
Triscuit hated it. Triscuit lives with Kat Yarter Angiano, our Melrose NY partner along
with Ikea. They will have a litter in the fall 2024. Triscuit is loving and happy. Both live
at a doggie daycare that Kat runs and both never met a dog (or cat or horse or goat!)
they didn’t love. True ambassadors for the breed. Triscuit has good hips, normal
elbows, genetic cleared, and a normal eye (CAER).' />
            <PhotoCard photo={TansyPic} title='Tally (Tansy Lanka Fire)' info='Sister to Triscuit. Loved showing and became a champion
before she was a year old. Our beautiful brown and cream girl. Good hips, normal
elbows, clear eyes (CAER) and genetically clear by testing. We are decided who her
husband will be this fall.' />
            <PhotoCard photo='' title="Noelle (Nakina's Spirit of Noelle)" info='Our import from Nakina and Gregory Vereen. Half
sister to Mateo, who is a true showboat but Noelle is a homebody, wanting to live with
other dogs and with as many children as possible. Pending testing as she is not yet a
year old.' />
            <PhotoCard photo={BirdeyPic} title="Birdey (Yutori's Blackbird Over the Lighthouse)" info='Our wonderful girl from the great
breeders, Cathy and Lynn, of Yutori in Wisconsin, one of the original breeders of
lapphunds in the US. She has a great pedigree, good OFA hips, normal elbows, clear
CAER (eyes), and clear of all but carrier of DM. Never a problem unless bred to
another carrier. She is beautiful but just hates to be separated from me at all so forget
showing. We tried. But she is the star of all my dogs in meeting people, loving kids
and other animals and my devoted companion every minute of the day. Smart as a
whip and will be bred this year to Johnny.' />
            <PhotoCard photo='' title='Casey (Lighthouse KooKoo for Cocoapuffs)' info='Our solid brown massively coated girl who
is the boss of all she sees. She loves riding all day around with Bryan in his truck.
Another great ambassador for the breed. Love her color and has had one excellent
litter. Negative per genetic testing, clear eyes (CERF), fair hips and normal elbows.' />
            <PhotoCard photo={VictoriaPic} title='Victoria (Lighthouse Victoria)' info='Our very pretty black with white socks and facial and
chest markings. Daughter of Jolie and Ringo Young and pending testing.' />
            <PhotoCard photo='' title='Rosie (Uptown Girl Lanka Fire)' info='Another French import since we loved our Tansy and
Triscuit so much. You cant beat the health and temperament. She is our silver
domino, a rare color and just beautiful, like a grey wolf. Just a baby.' />
            <PhotoCard photo={LillibetPic} title='Lillibet (Lighthouse Lillibet)' info='Daughter of perhaps our most beautiful girl, Emme and
of Jackson, our Quebec import. Strong, built like a male, and just started her show
career.' />
            <PhotoCard photo={JoyPic} title='Joy (Joie de Vivre)' info='Half French and half Swedish, totally outcrossed bloodlines, our
Brown with white markings girl, just started her show career.' />
            <PhotoCard photo='' title='Zuzu (Lighthouse Zuzu)' info='so excited to announce we have a wonderful black girl with 
white only on the chest. Our first black girl since Rowan!!!! Lives with our partner
Terry Parker and will start showing soon. Sister to Joy.' />
            <PhotoCard photo='' title="Bonnie (Lighthouse My Bonnie Lies O'er the Ocean)" info='Our rival to Emme in beauty,
Grand Champion and daughter of the great Guinness (Tapanterin Casanova) and Piper). Just started testing. The pride and joy 
of cofounders and partners Linda and Gary Pelletier.' />
            <PhotoCard photo='' title='Spirit (Lighthouse Hiisi, Spirit of the Forest)' info='Our lovely wolf sable girl, best
termperament ever. Excellent hips, normal elbows, genetic clear except as PRA carrier
(never aproblem unless bred to another carrier), and clear eyes (CERF). Bred to our
Quebec import and expecting a litter summer 2024.' />
        </div>
    </div>
  </div>
);

export default Females;