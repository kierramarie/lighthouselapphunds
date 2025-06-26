import React from 'react';
const Contact = () =>{
  return (
        <div className='page'>
          <div className='info'>
            <h2>Contact</h2>
            <div className='subheading'>
              <p>We welcome questions, requests for information, and visits to our location.</p>
            </div>
            <br></br>
            <div className="content">
              <div className='dual-column'>
                <div>
                  <p className='bold-name'>Mary Davidson and Bryan Jenkins</p>
                  <p>Location: Cape Cod, MA</p>
                  <p>Phone: (774) 207-7992</p>
                  <p>Email: leosbythesea@gmail.com</p>
                  <br></br>
                  <p className='bold-name'>Linda and Gary Pelletier</p>
                  <p>Location: Windsor, CT</p>
                  <p>Email: studio549@yahoo.com</p>
                </div>
                <div>
                  <p className='bold-name'>Sue Kidder</p>
                  <p>Location: Waynesville, NC</p>
                  <p>Phone: (843) 860-3907</p>
                  <p>Email: smkidder@me.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}
export default Contact;