import React from 'react'

const OnlyReview = (props) => {
  return (
  <>
      <div class="card mb-3 mx-auto mt-5" id="review_div" >
  <div class="row g-0">
    <div class="col-md-2">
      <img src= {props.img} id="review_img" alt="..."/>
    </div>
    <div class="col-md-10">
      <div class="card-body" id="re" >
       <img src='https://www.boloforms.com/_next/static/media/Stars.885edd0c.svg' class ="mb-2 mt-3" width='140'/>
         <p class="mb-2 text-sm sm:text-base">
     {props.text}   </p> 
        <h6 class="card-title mt-2">{props.name}</h6>
      </div>
    </div>
  </div>
</div>
  </>
  )
}

export default OnlyReview;