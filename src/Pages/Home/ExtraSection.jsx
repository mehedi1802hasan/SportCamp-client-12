
import React, { useEffect } from 'react';
import Marquee from "react-fast-marquee";
import { Fade, Slide } from "react-awesome-reveal";
import Subscription from './Subscription';
import Feedback from './Feedback';

const ExtraSection = () => {
    
      const icons = [
        'https://i.ibb.co/wpzdhkx/10602902.png',
        'https://i.ibb.co/RTKNYNK/731962.png',
        'https://i.ibb.co/G3tQZRh/8016652.png',
        'https://i.ibb.co/8gWrSjR/862032.png',
        'https://i.ibb.co/prch3g3/2035602.png',
        'https://i.ibb.co/9NhMW17/6528793.png',
        'https://i.ibb.co/ySCnnXw/2231549.png',
       ,
     
        // Add more image URLs here
      ];
    return (
       
    <div>
            <section>
            <Slide className='mt-16 mb-6 text-3xl font-bold text-center text-slate-900'>
      <h3 className='text-3xl font-bold text-yellow-700'>frequently asking</h3>
      </Slide>
           
             <div className='grid w-10/12 gap-3 mx-auto grid-cols-1 md:grid-cols-3 lg:grid-col-3 mr-6 md:mr-auto' >
      <div className="w-80 card h-52 bg-slate-200">
  <div className="items-center text-center card-body">
    <h2 className="card-title">HOW TO GET STARTED?</h2>
    <p>What is the age limit?
    <div className="divider"></div>
     <button className="btn btn-outline">Know more</button>
</p>
  </div>
</div>
<div className="card h-52 w-80 bg-slate-200">
  <div className="items-center text-center card-body">
    <h2 className="card-title">FEATURES OF WHISTLE</h2>
    <p>What can you do with us?
    <div className="divider"></div>
     <button className="btn btn-outline">Know more</button>
</p>
  </div>
</div>
<div className="h-52 w-80 card bg-slate-200">
  <div className="items-center text-center card-body">
    <h2 className="card-title">ADDITIONAL HELP</h2>
    <p>All time support from us?
    <div className="divider"></div>
     <button className="btn btn-outline ">Know more</button>
</p>
  </div>
</div>
 </div>
</section>
<Subscription></Subscription>
    <Feedback></Feedback>
<section className='mt-20'>

<div className='my-10 text-center'> 
      <Slide>
      <h3 className='text-3xl font-bold text-yellow-700'>Our Partnerships</h3>
      </Slide>
      <Fade className='font-semibold text-yellow-800' delay={1e3} cascade damping={1e-1}>
     <i> We are pleased to work with thousands of partners.- Those who work with us globally include:</i>

      </Fade>
      
     </div>
    
      <Marquee speed={60}>
     
        <div className="flex gap-4 px-10 mb-7">
          {icons.map((icon, i) => (
            <img
              key={i}
              src={icon}
              className="object-cover p-3 transition duration-300 border border-black rounded-full hover:border-green-600 hover:border-2 h-28 w-28 hover:bg-yellow-500"
              data-aos="fade-up" // Apply aos animation to the image
            />
          ))}
        </div>
       
      </Marquee>
        </section>
    </div>
    );
};

export default ExtraSection;