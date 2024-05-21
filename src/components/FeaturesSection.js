import React from 'react';
import lightWeightImage from '../assets/motionarteffect-img9.png'; 
import responsiveImage from '../assets/motionarteffect-img6.png'; 
import userFriendlyImage from '../assets/motionarteffect-img7.png'; 

const FeaturesSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-8xl mx-auto text-center"> 
        <h2 className="text-4xl font-bold mb-3">An All-Round Plugin With</h2>
        <h2 className="text-4xl font-bold mb-6">Powerful Features</h2>
        <div>
          <p className="text-xl">
            Whether you're a seasoned web designer or just starting out, Motion Art for 
          </p>
          <p className="text-xl">
            Elementor seamlessly integrates with the Elementor platform, providing you 
          </p>
          <p className="text-xl mb-10">
            with a seamless and intuitive experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg" style={{ height: '400px' }}>
            <div className="flex flex-col items-start">
              <img src={lightWeightImage} alt="Light Weight" className="h-25 mb-5" />
              <h3 className="text-3xl font-semibold mb-2">Light Weight</h3>
              <p className="text-xl">Motion Art for Elementor is designed to be </p>
              <h1 className="text-xl">lightweight.</h1>
            </div>
          </div>
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg" style={{ height: '400px' }}>
            <div className="flex flex-col items-start">
              <img src={responsiveImage} alt="100% Responsive" className="h-25 mb-5" />
              <h3 className="text-3xl font-semibold mb-2">100% Responsive</h3>
              <p className="text-xl">Create a consistent visual experience </p>
              <h1 className="text-xl">across all devices.</h1>
            </div>
          </div>
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg" style={{ height: '400px' }}>
            <div className="flex flex-col items-start">
              <img src={userFriendlyImage} alt="User Friendly Interface" className="h-25 mb-5" />
              <h3 className="text-3xl font-semibold mb-2">User Friendly Interface</h3>
              <p className="text-xl">Ensure a smooth experience for both</p>
              <h1 className="text-xl"> applicants and administrators.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection