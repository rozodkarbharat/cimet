import React from 'react';
import Form from '../Components/Form';
// import HomePageVideo from '../assets/Homevideo.mp4';

const Home = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      
      <div className="absolute inset-0 flex justify-center items-center">
        <Form/>
      </div>
    </div>
  );
};

export default Home;
