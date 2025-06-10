import PhotoCard from '../components/photoCard';
import { ourBoys } from '../utils/ourBoys';


const Males = () => (
  <div className='page'>
    <div className='info'>
        <h2>Our Boys</h2>
        <div className="content">
          <div className='cardList'>
            {ourBoys.map((boy) => (
              <PhotoCard photo={boy.photo} title={boy.title} info={boy.info} />
            ))}
          </div>
        </div>
    </div>
  </div>
);

export default Males;