import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCompass, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bck_b_dark">
      <div className="container">
        <div className="logo">
          Waves
        </div>
        <div className="wrapper">
          <div className="left">
            <h2>Contact information</h2>
            <div className="business_nfo">
              <div className="tag">
                <FontAwesomeIcon 
                  icon= {faCompass}
                  className="icon"
                />
                <div className="nfo">
                  <div>Address</div>
                  <div>Kramer 1234</div>
                </div>
              </div>

              <div className="tag">
                <FontAwesomeIcon 
                  icon= {faPhone}
                  className="icon"
                />
                <div className="nfo">
                  <div>Phone</div>
                  <div>2345-222222</div>
                </div>
              </div>

              <div className="tag">
                <FontAwesomeIcon 
                  icon= {faClock}
                  className="icon"
                />
                <div className="nfo">
                  <div>Working hours</div>
                  <div>Mon/Sun 9am-8pm</div>
                </div>
              </div>

              <div className="tag">
                <FontAwesomeIcon 
                  icon= {faEnvelope}
                  className="icon"
                />
                <div className="nfo">
                  <div>Email</div>
                  <div>nfo@waves.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <h2>Be the first know</h2>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, facilis!</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;