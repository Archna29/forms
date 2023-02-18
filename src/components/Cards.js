// THis is the component for all the card type structure:
import React from 'react'

import './css/work.css';
const Cards = (props) => {
  return (
   <>
  
  <div class="col">
    <div class="card h-100 me-5" id= {props.cardid}>
      <img src={props.img} class="card-img-top" id ={props.imgcss} alt="..."/>
      <div class={props.divclass}>
        <h5 class="card-title fw-bold">{props.title}</h5>
        <p class="card-text ">{props.text}</p>
 
      </div>
    
    </div>
  </div>
  
     
   </>
  )
}

export default Cards;