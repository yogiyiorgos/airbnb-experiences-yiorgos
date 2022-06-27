import React from 'react';
import katieImg from '../images/katie-zaferes.png';
import starIcon from '../images/star-icon.png';

function Card() {
  return (
    <div className='card-section'>
      <img
        src={katieImg}
        alt='Katie Zaferes smilling in swimsuit'
        className='card--image'
      />
      <div className='card--stats'>
        <img src={starIcon} alt='A red star' className='star--icon' />
        <span>5.0</span>
        <span className='text-gray'>(6)・</span>
        <span className='text-gray'>USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <span className='text-bold'>From $136</span> / person
      </p>
    </div>
  );
}

export default Card;
