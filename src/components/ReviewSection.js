import React from 'react';
import envatoLogo from '../assets/motionarteffect-img2.png';
import g2Logo from '../assets/motionarteffect-img1.png';
import wordpressLogo from '../assets/motionarteffect-img3.png';
import wandImage from '../assets/motionarteffect-img5.png';
import star from '../assets/motionarteffect-img4.png';

const ReviewsSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-2xl sm:text-4xl font-extrabold mb-10">Trusted by thousands of users around the world</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-y-0 sm:space-x-20 mb-16">
          <div className="flex flex-col sm:flex-row items-center space-x-4">
            <img src={envatoLogo} alt="Envato" className="h-16 sm:h-20 mb-2" />
            <div className="flex flex-col items-center">
              <img src={star} alt="star" className="h-12 mb-2 w-40" />
              <p className="text-lg">4.5 Score, 9 Reviews</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-x-4">
            <img src={g2Logo} alt="G2" className="h-16 sm:h-20 mb-2" />
            <div className="flex flex-col items-center">
              <img src={star} alt="star" className="h-12 mb-2 w-40" />
              <p className="text-lg">4.5 Score, 9 Reviews</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-x-4">
            <img src={wordpressLogo} alt="WordPress" className="h-16 sm:h-20 mb-2" />
            <div className="flex flex-col items-center">
              <img src={star} alt="star" className="h-12 mb-2 w-40" />
              <p className="text-lg">4.5 Score, 9 Reviews</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start text-left mb-12"> 
          <div className="w-full lg:w-2/3 mb-8 lg:mb-0"> 
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-8"> 
              Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.
            </p>
            <button
              type="button"
              className="bg-gradient-to-r from-purple-500 to-orange-500 text-white font-medium rounded-lg text-lg px-8 py-3"
            >
              Purchase From Envato &rarr;
            </button>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center"> 
            <img src={wandImage} alt="Magic Wand" className="h-48 md:h-56 lg:h-64" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;