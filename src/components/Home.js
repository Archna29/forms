import React from 'react'
import Video from './Video';
import Navbar from './Navbar';
import Cards from './Cards'
import {WorkData,Features} from '../Data/Workdata';
import Review from './Review'
import Workflow from './Workflow';
import OnlyReview from './OnlyReview';
import Award from './Award';
import Footer from './Footer';
// in this component we collected all the components and then put this one in app.js
const Home = () => {
  return (
    <>
   
<Navbar/>
<Video/>
<div className='WorkContainer'>
 <div className='mt-5 mb-3 pt-3'>  <h2 className='text-center'>How does BoloForms work?</h2>
   <p className='text-center '>Set up your first workflow in just 3 easy steps.</p></div>
<div class="row row-cols-1 row-cols-md-3 g-4 m-3 ">
{WorkData.map((item,key)=>
<Cards 
key={item.id}
divclass={item.divclass}
imgcss={item.imgcss}
img={item.img}
  title={item.title}
  text={item.text}
/>)}
</div>
</div>

{/* A card of review */}
<Review
  img="https://www.boloforms.com/_next/static/media/repa.483a1471.jpeg"
  text="This add on is easy to install and works just amazing. 
        The dashboard has a clean user interface. The app is easy and simple to use.
         Whenever you need an approval process for any form (from one person or more), this add on is what makes the job."
name="Repa Mandala"
/>
{/* Now feature's component */}
<div class="mt-3">
<div className='mt-5 mb-3 pt-3'>  <h2 className='text-center fw-bolder'>Features</h2>
   <p className='text-center '>Everything that your organisation will love, & more..</p></div>

<div class="row row-cols-1 row-cols-md-2 g-4 mt-5 ms-auto me-3">
{Features.map((item)=>
<Cards
key={item.id}
imgcss={item.imgcss}
divclass={item.divclass}
img={item.img}
  title={item.title}
  text={item.text}
/>)}
</div>
</div>
<Review
  img="https://www.boloforms.com/_next/static/media/alaa.a9f02030.jpeg"
  text="I like this software so much , super user friendly , A true life saver charging you with no cost ,
   the customer support is super helpful mr paresh help me alot in understanding the software seconds after asking his support .
    thank you so much wishing you lots of success."

name="Alaa Khaled"
/>
<OnlyReview 
img="https://www.boloforms.com/_next/static/media/deepak.e041dab0.jpeg"
text="Easy to use interface and timely support...looking for more features"
name="Deepak S (Solero Corporation)"/>
<Workflow />

{/* CA thought */}
 <div class="card text-center mx-auto mt-5 mb-3 p-3" id="patric_div"  >
 
  <div class="card-body text-white w-75 mx-auto mt-5 fw-bold" >
    <p class="card-text">“ Boloforms has completely revolutionized our form approval process. It is incredibly easy to use and simple to set up, saving us countless hours of work. We can now easily manage all of our form approvals, assign tasks to different team members and track progress all in one place. Boloforms is a must-have for any business looking for an efficient Form Approval Workflow Software! "
.</p> <img src='https://www.boloforms.com/_next/static/media/Stars.885edd0c.svg' class ="mb-2 mt-3" width='140'/> 
<div class="d-flex justify-content-center mt-3">
<img src="https://www.boloforms.com/_next/static/media/patrick.4de6d5b1.jpeg" class="mt-3" id="review_img" alt=".."/> 
<p class="card-text fw-bold mt-5">Patrick Nyama</p>
</div>
  </div>
</div> 
{/* Now Fully automated */}

<div className='WorkContainer mt-5'>
 <div className='mt-5 mb-3 pt-3'>  <h2 className='text-center'> Fully Automated Workflows</h2>
   <p className='text-center '>No more painful manual approval management and wasting countless hours.</p></div>
   <p className='text-center '> BoloForms workflows acts as a glue holding together all your approval processes.</p>
</div>
{/* calling review component and passing props to it */}
<Review 
img="https://www.boloforms.com/_next/static/media/raman.e5477e92.jpeg"
text="I recently started using Boloforms for my Google Forms and it has been an absolute game-changer. The software is intuitive and user friendly, so I was able to set up my forms quickly & easily. It also provides powerful analytics to understand and act on the data collected from my forms in real-time. Overall, it's been a great experience using Boloforms and I highly recommend it!"
name="Raman R"/>
<OnlyReview
img="https://www.boloforms.com/_next/static/media/john.39efe227.jpeg"
text="Customer support is super awesome, Great add on for our team! This helps our task management must easier. I can easily keep track of my member's request and work progress. The approval process is smooth and extremely quick. I highly recommend this addon especially for small business like mine."
name="John M."

/>
{/* div of no risk starts from here */}
<div class="card mt-5 mb-3 p-3 bg-white" id="risk_div"  >
<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-2">
      <img src="https://www.boloforms.com/_next/static/media/moneyback-gurantee.8417d885.png"  width="100" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-10">
      <div class="card-body">
        <h6 class="card-title text-secondary">MY 100% NO-RISK DOUBLE-GUARANTEE</h6>
        <h5 class="card-text fw-bold">If you don’t like BoloForms over the next 30 days, I will happily refund 100% of your purchase. No questions asked..</h5>
 <p class="card-text">Here's why I'm offering this -</p>
 <p class="card-text">I have seen the power of automating your business workflows. Take some time out of your busy schedule today and see what all things can be automated in your workflows.</p>
 <p class="card-text">You will find that most of your time is going in doing things that could be done better by automating. You just have to give it a shot!</p>
 <p class="card-text">Start with automating small workflow and then gradually you will love it!!</p>
 <p class="card-text fw-bold">Paresh Deshmukh</p>
 <p class="card-text fw-bold "> <small class="text-dark">Co-Founder BoloForms</small></p>
      </div>
    </div>
  </div>
</div>

</div>
{/* Awards section */}

<Award/>
{/* FOOTER */}
<Footer/>
    </>
 
  )
}

export default Home