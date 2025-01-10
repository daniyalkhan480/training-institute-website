import React from 'react';

const CardItem = ({ card }) => {
  return (
    <div className='col-md-6 col-lg-3 mb-4'>
      <div className='card card-custom'>
        <div className='card-body d-flex justify-content-between align-items-center card-body-custom'>
          <div>
            <h5 className='card-title'>{card.title}</h5>
            <p className='card-text'>{card.pText}</p>
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            <img src={card.imgUrl} alt="Graph Image" className='img-fluid card-image' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;