import React from 'react'

const Video = () => {
  return (
<>
<div className='card mx-3 mb-3 mt-5  '>
<div class=" d-flex" id="videoflex" >
<div>
      <div class="card-body mx-3">
        <h3 class="card-title fw-bold mb-3">Transform Google Forms Into Interactive Workflows</h3>
        <p class="card-text w-75 ">
        BoloForms is a Google Forms add on that allows you to add conditional logic to your forms. With BoloForms
        , you can create interactive workflows,
         approval flows & automate processes.</p>
         <button type="button" class="btn2 fw-bold">Install For FREE</button>
      </div>
       </div>

       <div class="ms-5 mt-5">
       <iframe  width ="500" height= "319" id ="review_iframe" src="https://www.youtube.com/embed/riiUkCRpIio" 
       title="How to create BoloForms Approvals Single Level Workflow ?"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
    </div>
    
       </div>
     
</>
  )
}

export default Video