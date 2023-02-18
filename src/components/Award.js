// this is the component for all the awards 
import React from 'react'
import { AwardData } from '../Data/Workdata'
import Cards from './Cards'
const Award = () => {
  return (
  <>
    <div className='WorkContainer'>
    <img src='https://www.boloforms.com/_next/static/media/Stars.885edd0c.svg' className='mt-5' id="center" width='140'/>  
 <div className='mt-3 mb-3 pt-1'>  <h2 className='text-center fw-bold'>Award-winning support.</h2>
   <p className='text-center '>Best-in-class support. We’re always here to help – here’s how to connect..</p></div>
   </div>
   <div class="row row-cols-1 row-cols-md-4 g-3 mt-5 mb-3 mx-5 ">
{
    AwardData.map((item,key)=>
        <Cards
        key={item.id}
imgcss={item.imgcss}
divclass={item.divclass}
img={item.img}
  title={item.title}
  text={item.text} 
    cardid={item.cardid}
  />
    
    )
}
</div>
  </>
  )
}

export default Award