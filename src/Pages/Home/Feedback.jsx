import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { Slide, Fade } from "react-awesome-reveal";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, History } from 'swiper/modules';
const Feedback = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('review.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  return (
    <div className='mt-14'>
      <div>

        <p className=' text-center text-3xl font-bold font-serif text-rose-800 md:-mb-16'><Fade duration={1000} cascade damping={1e-1}>Our Customer Says</Fade></p>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={true}
        history={{
          key: 'slide',
        }}
        modules={[Navigation, Pagination, History]}
        className="mySwiper"
      >

        <div >
          {
            reviews.map(review => <SwiperSlide data-history="1">

              <div className='  flex flex-col items-center md:mt-12'>

              <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                <Slide><Fade duration={1000} cascade damping={1e-1}> <p className='mx-auto w-9/12'>{review.details} </p></Fade></Slide>
                <h3 className='text-2xl font-serif  mt-2'>{review.name}</h3>
                <div className=' w-36 h-36 flex justify-center items-center'>
                  <img className=' rounded-full mt-4' src={review.image} alt="" />

                </div>
              </div>
            </SwiperSlide>)
          }
        </div>


      </Swiper>
    </div>
  );
};

export default Feedback;