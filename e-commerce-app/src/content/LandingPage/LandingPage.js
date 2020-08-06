import React from 'react';

import shoe from '../../assets/images/shoe1.jpg';
import './landing.scss';

const LandingPage = () => {
  return (
    <section className="landing-page">
      <div className="store-info">
        <div className="store-info__caption">
          <h3 className="store-info__caption--bg">New</h3>
          <h3 className="store-info__caption--primary">Men Shoes</h3>
          <h3 className="store-info__caption--title">Collection</h3>
          <h3 className="store-info__caption--subtitle">
            Street Style New Fashion
          </h3>
        </div>
        <div className="store-info__image">
          <img src={shoe} alt="" />
        </div>
      </div>
      <div className="services"></div>
      <div className="store-info"></div>
      {/* <FeaturedProducts /> */}
    </section>
  );
};

export default LandingPage;
