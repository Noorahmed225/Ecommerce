import React from 'react'
import './Productcard.css';

const Productcard = ({image,title,description,price}) => {
  return (
    <div className = "card">
      <img src = {image} alt = "Product"/>

    <div className = "description">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>₹{price}</p>
    </div>

    <div className = "btn">
      <button>Add to cart</button>
    </div>
    
    
    </div>
  )
}

export default Productcard;
