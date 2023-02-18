import React from 'react'
import './css/Home.css'
import tick from './tick.png';
const Review = (props) => {
  return (
   <>
   <div className='Review_Container mt-5 '>
    <div class="card mb-3 mx-auto " id="review_div" >
  <div class="row g-0">
    <div class="col-md-2">
      <img src= {props.img} id="review_img" alt="..."/>
    </div>
    <div class="col-md-10">
      <div class="card-body"  >
       <img src='https://www.boloforms.com/_next/static/media/Stars.885edd0c.svg' class ="mb-2 mt-3" width='140'/>
         <p class="mb-2 text-sm sm:text-base">
     {props.text}   </p> 
        <h6 class="card-title mt-2">{props.name}</h6>
      </div>
    </div>
  </div>
</div>
<div class="d-flex justify-content-center mt-3 ">
<button className="btn2 mx-3 mt-5 w-25 fw-bolder" type="submit">
<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" class="mr-4 text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z"></path></svg>
&nbsp; Install For FREE</button>
      <button className="btn1  mt-5 w-25 fw-bolder" type="submit" id="review_boloforms">
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" class="mr-4 text-xl " height="1em" width="1em" 
      xmlns="http://www.w3.org/2000/svg">
      <path d="M477.64 38.26a4.75 4.75 0 00-3.55-3.66c-58.57-14.32-193.9 36.71-267.22 110a317 317 0 00-35.63 42.1c-22.61-2-45.22-.33-64.49 8.07C52.38 218.7 36.55 281.14 32.14 308a9.64 9.64 0 0010.55 11.2l87.31-9.63a194.1 194.1 0 001.19 19.7 19.53 19.53 0 005.7 12L170.7 375a19.59 19.59 0 0012 5.7 193.53 193.53 0 0019.59 1.19l-9.58 87.2a9.65 9.65 0 0011.2 10.55c26.81-4.3 89.36-20.13 113.15-74.5 8.4-19.27 10.12-41.77 8.18-64.27a317.66 317.66 0 0042.21-35.64C441 232.05 491.74 99.74 477.64 38.26zM294.07 217.93a48 48 0 1167.86 0 47.95 47.95 0 01-67.86 0z"></path><path d="M168.4 399.43c-5.48 5.49-14.27 7.63-24.85 9.46-23.77 4.05-44.76-16.49-40.49-40.52 1.63-9.11 6.45-21.88 9.45-24.88a4.37 4.37 0 00-3.65-7.45 60 60 0 00-35.13 17.12C50.22 376.69 48 464 48 464s87.36-2.22 110.87-25.75A59.69 59.69 0 00176 403.09c.37-4.18-4.72-6.67-7.6-3.66z"></path></svg>
      &nbsp;BoloForms Premium</button>
</div>
<div class="d-flex mt-3 flex-wrap " id="flex_tick">
<span class="text-secondary ">
<img src={tick} class ="mx-3" alt="Logo" width="15"/>
Trusted by 50000+ Businesses</span>
<span class="text-secondary  "><img src={tick} class ="mx-3" alt="Logo" width="15"/>30 Days Money Back Guarantee</span>
<span class="text-secondary "><img src={tick} class ="mx-3" alt="Logo" width="15"/>1-1 Zoom & WhatsApp Onboarding</span>
</div>

</div>
   </>
  )
}

export default Review