import React from 'react';
import Womenproduct from './Womenproduct';
import saree1 from '../assets/saree1.jpg';         
import saree2 from '../assets/saree2.jpg'; 
import saree3 from '../assets/saree3.jpg'; 
import saree4 from '../assets/saree4.jpg'; 
import saree5 from '../assets/saree5.jpg'; 
import saree6 from '../assets/saree6.jpg'; 
import saree7 from '../assets/saree7.jpg'; 
import saree8 from '../assets/saree8.jpg'; 

const Womencard = () => {
    return(

        <div className = "Women-container">
    <Womenproduct image = {saree1}
                  title = "Soch"
                  description ="Beautifull pink stone worked saree ."
                  price = "1999"/>
    <Womenproduct image = {saree2}
                  title = "Trends"
                  description = "Maroon saree with gold design print."
                  price = "2500"/> 
    <Womenproduct image = {saree3}
                  title = "Banarsi"
                  description = "printed sky blue color saree."
                  price = "2200"/> 
    <Womenproduct image = {saree4}
                  title = "Reshmi"
                  description = "printed designed gold color saree."
                  price = "3999"/> 
    <Womenproduct image = {saree5}
                  title = "Soch"
                  description = "green printed designed saree."
                  price = "3999"/> 
    <Womenproduct image = {saree6}
                  title = "Trends"
                  description = "Ancient theme plain saree."
                  price = "3500"/> 
    <Womenproduct image = {saree7}
                  title = "Banarsi"
                  description = "greenish blue stone worked saree."
                  price = "4999"/> 
    <Womenproduct image = {saree8}
                  title = "Reshmi"
                  description = "gold marron stone worked saree."
                  price = "4500"/> 
     </div>

     
    )
}
export default Womencard;