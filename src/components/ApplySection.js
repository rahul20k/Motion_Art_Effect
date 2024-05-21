import React from 'react';
import form1 from '../assets/motionarteffect-img11.png';
import form2 from '../assets/motionarteffect-img10.png';

const ApplySection = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-8">
      <div className="text-center mb-16 text-5xl font-bold space-y-2">
        <h1>Apply On Any Section Or Enable</h1>
        <h1>For Whole Page</h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-center sm:space-x-8 space-y-8 sm:space-y-0">
        <div className="bg-gray-800 p-8 rounded-3xl shadow-lg w-full sm:w-1/2">
          <h1 className="text-center text-xl font-semibold mb-4">
            Apply On Section
          </h1>
          <p className="text-center mb-4">
            Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.
          </p>
          <img src={form1} alt="form1" className="mx-auto h-50" />
        </div>
        <div className="bg-gray-800 p-8 rounded-3xl shadow-lg w-full sm:w-1/2">
          <h1 className="text-center text-xl font-semibold mb-4">
            Apply On Page
          </h1>
          <p className="text-center mb-4">
            Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.
          </p>
          <img src={form2} alt="form2" className="mx-auto h-50 mb" />
        </div>
      </div>
    </div>
  );
}

export default ApplySection;