import React from 'react';
import starIcon from '../images/star-icon.png';

function Card(props) {
  let badgeText;
  if (props.entry.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.entry.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className='card-section'>
      {badgeText ? <div className='card--badge'>{badgeText}</div> : null}
      <img src={props.entry.coverImg} className='card--image' />
      <div className='card--stats'>
        <img src={starIcon} alt='A red star' className='star--icon' />
        <span>{props.entry.stats.rating}</span>
        <span className='text-gray'>({props.entry.stats.reviewCount})・</span>
        <span className='text-gray'>{props.entry.location}</span>
      </div>
      <p>{props.entry.title}</p>
      <p>
        <span className='text-bold'>From ${props.entry.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
