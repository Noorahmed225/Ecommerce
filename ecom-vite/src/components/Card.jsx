import React from 'react'
import Productcard from './Productcard';
import jeans1 from '../assets/jeans1.jpg';
import jeans2 from '../assets/jeans2.jpg';
import jeans3 from '../assets/jeans3.jpg';
import jeans4 from '../assets/jeans4.jpg';
import jeans5 from '../assets/jeans5.jpg';
import jeans6 from '../assets/jeans6.jpg';
import jeans7 from '../assets/jeans7.jpg';
import jeans8 from '../assets/jeans8.jpg';


const Card = () => {
  return (
    <div className = "card-container">
    <Productcard image ={jeans1} 
                 title = "Zara"
                 description = "henly t-shirt & brown Camo Pant."
                 price ="4999 "/>
    <Productcard image ={jeans2} 
                 title = "Levis"
                 description = "brown Fullsleeves t-shirt"
                 price ="999"/>
    <Productcard image ={jeans3} 
                 title = "H&M"
                 description = "Beige Fullsleeves t-shirt"
                 price ="1499"/>
    <Productcard image ={jeans4} 
                 title = "Zara"
                 description = "lose fit Camo pant."
                 price ="2999"/>
    <Productcard image ={jeans5} 
                 title = "Gap"
                 description = "Navy blue cargo pant."
                 price ="1999"/>
    <Productcard image ={jeans6} 
                 title = "Peter england"
                 description = "Brown cargo pant."
                 price ="1999"/>
    <Productcard image ={jeans7} 
                 title = "Levis"
                 description = "4 pocket cargo blue pant."
                 price ="1999"/>
    <Productcard image ={jeans8} 
                 title = "Jack & Jhones"
                 description = "Frayed"
                 price =" 2499"/> 
    </div>
  )
}

export default Card;
