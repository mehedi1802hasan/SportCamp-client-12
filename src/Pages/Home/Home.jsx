import React from 'react';
import Slider from './Slider';
import PopularClasses from './PopularClasses';
import PopularInstracturs from './PopularInstracturs';
import ExtraSection from './ExtraSection';

const Home = () => {
    return (
        <div>
        <Slider></Slider>
        <PopularClasses></PopularClasses>
        <PopularInstracturs></PopularInstracturs>
        <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;