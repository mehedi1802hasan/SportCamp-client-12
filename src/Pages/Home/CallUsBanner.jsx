import React from 'react';

const CallUsBanner = () => {
    return (
        <div className='my-5 '>
      <div
        className="min-w-fit mx-auto hero"
        style={{
          backgroundImage: `url("https://playhockey.axiomthemes.com/wp-content/uploads/2016/11/parallax_2-1.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-opacity-90 hero-overlay"></div>
        <div className="hero-content text-neutral-content ">
          <div className="max-w-md mt-20 ">
           
            <p className="mb-5 text-2xl ">CALL US TOLL FREE <span className='text-red-500'>1-800-123-4567</span></p>
            <p className='ml-14'>Find Out What Program Best Fits For Your Player</p>

            <div className="flex items-center justify-center my-5 ">
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default CallUsBanner;