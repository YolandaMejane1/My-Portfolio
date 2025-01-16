import React from 'react';
import video from '../assets/s.mp4'; 

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen " style={{ backgroundColor: '#EFEAEC' }}>
      <video className="w-600 h-600 object-cover" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Loading;
