import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ item }) => {
  return (
    <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/product/${item.id}`}>
      <div className='card'>
        <div className="image">
          <img src={item.img} alt="" className="mainimage" />
          <img src={item.img2} alt="" className="imagetwo" />
        </div>
        <h2>{item.Title}</h2>
        <div className='prices'>
          <h3>₹{item.Price}</h3>
          <h3>₹{item.NewPrice}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
