import React from 'react';

import StoreInfo from '../../components/StoreInfo';

import shoe from '../../assets/images/shoe1.jpg';
import bag from '../../assets/images/bag.jpg';
import './landing.scss';

const LandingPage = () => {
  return (
    <section className="landing-page">
      <StoreInfo
        backgroundText={'New'}
        primaryText={'Men Shoes'}
        titleText={'Collection'}
        subtitleText={'street style new fashion'}
        image={shoe}
      />
      <div className="services">
        <div className="services__card">
          <h3 className="services__title">24/7 Customer service</h3>
          <p className="services__body">Call us any time</p>
        </div>
        <div className="services__card">
          <h3 className="services__title">Easy online returns</h3>
          <p className="services__body">Send Within 30 Days</p>
        </div>
        <div className="services__card">
          <h3 className="services__title">Free shipping globally</h3>
          <p className="services__body">Delivery in 4 Days</p>
        </div>
      </div>
      <StoreInfo
        backgroundText={'50%'}
        primaryText={'Storewide Sale'}
        titleText={'Summer'}
        subtitleText={'all accessories'}
        image={bag}
      />
      {/* <FeaturedProducts /> */}
    </section>
  );
};

export default LandingPage;
