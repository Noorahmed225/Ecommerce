import React from 'react';
import './Womenproduct.css';

const Womenproductcard = ({image,title,description,price}) =>{
    return (
        <div className = "womenproduct">
            <img src = {image} alt ="product"/>

        <div className = "title">
            <h1>{title}</h1>

            <div className = "des">
                <p>{description}</p>

            <div className = "price">
                <p>₹{price}</p>
            
            <div className = "btn">
                <button>Add to cart</button>

            </div>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Womenproductcard;