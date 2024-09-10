import React from 'react';
import Image1 from '../assets/Image1.png';
import Image2 from '../assets/Image2.png';
import Image3 from '../assets/Image3.png';
import MaxWidthWrapper from './MaxWidthWrapper';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center py-16 bg-gradient-to-r from-blue-50 via-white to-blue-100">
      <MaxWidthWrapper>
        {/* Text Content */}
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 text-center">
          {/* Tagline */}
          <span className="inline-block bg-blue-200 text-blue-700 py-2 px-4 rounded-full text-sm font-semibold">
            Explore the world!
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Travel <span className="text-blue-600">top</span> destinations <br />
            <span className="text-blue-600">around the world</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 max-w-lg mx-auto">
            Discover a wide range of travel destinations with exclusive packages for your next adventure.
          </p>

          {/* Call to Action Button */}
          <div className="mt-8">
          <a 
            href="mailto:kartikeyansri@gmail.com?subject=Ticket Booking Inquiry&body=Please provide your booking details." 
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-indigo-700 transition duration-300 mt-4 md:mt-0"
          >
            Book Now
          </a>
          </div>
        </div>

        {/* Images Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src={Image1}
            alt="Travel destination 1"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
          />
          <img
            src={Image2}
            alt="Travel destination 2"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
          />
          <img
            src={Image3}
            alt="Travel destination 3"
            className="rounded-lg shadow-lg w-full h-64 object-cover"
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
