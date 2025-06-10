import PhotoCard from '../components/photoCard';
import { ourGirls } from '../utils/ourGirls';

const Females = () => (
  <div className='page'>
    <div className='info'>
        <h2>Our Girls</h2>
        <div className="content">
          <div className='cardList'>
            {ourGirls.map((girl) => (
              <PhotoCard photo={girl.photo} title={girl.title} info={girl.info} />
            ))}
          </div>
        </div>
    </div>
  </div>
);

export default Females;