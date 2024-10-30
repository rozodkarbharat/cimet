import React from 'react';
import HomePageVideo from '../assets/Homevideo.mp4';
import Form from '../components/Form';

const Home: React.FC = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={HomePageVideo}
        autoPlay
        loop
        muted
      />

      {/* Form Overlay */}
      <div className="absolute inset-0 flex justify-center items-center">
        <Form />
      </div>
    </div>
  );
};

export default Home;
