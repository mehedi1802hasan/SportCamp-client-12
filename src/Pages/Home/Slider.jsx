import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper';
import './Slider.css';
import { useEffect } from 'react';
import { useState } from 'react';
const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
const [images,setImages]=useState([])
  useEffect(()=>{
    fetch('sliderImg.json')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setImages(data.images)
    })
  },[])
  return (
    <div>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
   
    {
  images.map((image, index) => (
    <SwiperSlide key={index}>
      <img src={image.url} alt="" />
      <div className="slide-text">
        <h2 className='text-xl font-bold text-yellow-500'>{image.title}</h2>
        <p>{image.description}</p>
      </div>
    </SwiperSlide>
  ))
}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
       </div>
    );
};

export default Slider;