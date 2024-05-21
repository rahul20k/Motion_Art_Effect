import React from 'react';
import browserSupportImage from '../assets/motionarteffect-img8.png'; 

const SupportSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-16 px-8 rounded-lg shadow-lg max-w-6xl mx-auto">
        <div className="text-center text-xl font-bold mb-4">
          Supported by All Popular Browsers
        </div>
        <p className="text-center mb-8">
          Rest assured, Motion Art is designed to be compatible with all major web browsers.
        </p>
        <div className="flex justify-center">
          <img src={browserSupportImage} alt="Supported Browsers" className="h-12 w-auto" />
        </div>
      </div>
    </div>
  );
}

export default SupportSection;