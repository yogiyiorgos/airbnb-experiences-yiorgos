import React from 'react';
import starIcon from '../images/star-icon.png';

function Card(props) {
  return (
    <div className='card-section'>
      <img src={props.img} alt={props.alt} className='card--image' />
      <div className='card--stats'>
        <img src={starIcon} alt='A red star' className='star--icon' />
        <span>{props.rating}</span>
        <span className='text-gray'>({props.reviewCount})・</span>
        <span className='text-gray'>{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className='text-bold'>From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
