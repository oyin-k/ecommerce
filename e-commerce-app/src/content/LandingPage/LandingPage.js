import React, { useState, useEffect } from 'react';

import { db } from '../../services/firebase';

import StoreInfo from '../../components/StoreInfo';
import FeaturedProducts from '../../components/FeaturedProducts';

import shoe from '../../assets/images/shoe1.jpg';
import bag from '../../assets/images/bag.jpg';
import './landing.scss';

const LandingPage = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    db.collection('products').onSnapshot((snapshot) => {
      setFeaturedPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          featuredPost: doc.data(),
        }))
      );
    });
  }, []);

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
      {featuredPosts.map(({ id, featuredPost }) => {
        console.log(id, featuredPost);
        return (
          <FeaturedProducts
            key={id}
            name={featuredPost.name}
            price={featuredPost.price}
            image={featuredPost.img}
          />
        );
      })}
    </section>
  );
};

export default LandingPage;
