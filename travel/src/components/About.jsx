import React from 'react';
import Image1 from '../assets/Icon1.png';
import Image2 from '../assets/Icon2.png';
import Image3 from '../assets/Icon3.png';
import Building from '../assets/Home.png';
import MaxWidthWrapper from './MaxWidthWrapper';

const AboutSection = () => {
  return (
    <div className="relative flex flex-col items-center py-16 bg-gradient-to-r from-blue-50 via-white to-blue-100">
    <MaxWidthWrapper>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold text-gray-800">ABOUT US</h1>
          <p className="mt-4 text-lg text-gray-700">
            At TravelerNest, we are dedicated to making your travel experiences unforgettable. Whether you seek exotic adventures or cultural immersion, we provide personalized services to ensure every trip is special. Explore the world with confidence, knowing we’ve got your travel plans covered.
          </p>

          {/* Services/Features List */}
          <div className="mt-8 space-y-6">
            <div className="flex items-center">
              <img src={Image1} alt="Service 1" className="w-16 h-16 object-cover rounded-full" />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800">Personalized Travel Plans</h2>
                <p className="text-gray-600">
                  We tailor itineraries that match your preferences and interests, ensuring a seamless and personalized travel experience.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <img src={Image2} alt="Service 2" className="w-16 h-16 object-cover rounded-full" />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800">Exclusive Trip Schedules</h2>
                <p className="text-gray-600">
                  Enjoy stress-free travel with well-organized and flexible trip schedules designed specifically for your adventure.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <img src={Image3} alt="Service 3" className="w-16 h-16 object-cover rounded-full" />
              <div className="ml-4">
                <h2 className="text-xl font-semibold text-gray-800">Exciting Travel Discounts</h2>
                <p className="text-gray-600">
                  Gain access to exclusive travel deals and discount coupons, helping you save while you explore the world.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="relative md:w-1/4 mt-8 md:mt-0 flex justify-center items-center">
          <img src={Building} alt="Building" className="w-full h-full " />
        
        </div>
      </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutSection;
