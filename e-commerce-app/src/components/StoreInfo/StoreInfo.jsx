import React from 'react';

const StoreInfo = ({
  backgroundText,
  primaryText,
  titleText,
  subtitleText,
  image,
}) => (
  <div className="store-info">
    <div className="store-info__caption">
      <h3 className="store-info__caption--bg">{backgroundText}</h3>
      <h3 className="store-info__caption--primary">{primaryText}</h3>
      <h3 className="store-info__caption--title">{titleText}</h3>
      <h3 className="store-info__caption--subtitle">{subtitleText}</h3>
    </div>
    <div className="store-info__image">
      <img src={image} alt="" />
    </div>
  </div>
);

export default StoreInfo;
