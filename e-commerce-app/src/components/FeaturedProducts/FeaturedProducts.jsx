import React from 'react';

const FeaturedProducts = ({ name, price, image }) => {
  return (
    <div className="featured-products">
      <div className="featured__item">
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default FeaturedProducts;
