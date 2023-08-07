import React from 'react';
import Slider from './Slider';
import PopularClasses from './PopularClasses';
import PopularInstracturs from './PopularInstracturs';
import ExtraSection from './ExtraSection';
import CallUsBanner from './CallUsBanner';

const Home = () => {
    return (
        <div>
        <div className='mx-auto max-w-7xl'>
        <Slider></Slider>
        <PopularClasses></PopularClasses>
        <PopularInstracturs></PopularInstracturs>
    
        <ExtraSection></ExtraSection>
     
        </div>
        <CallUsBanner></CallUsBanner>
      
        </div>
    );
};

export default Home;