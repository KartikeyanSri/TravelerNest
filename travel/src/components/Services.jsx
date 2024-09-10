import React from 'react';
import ticketBookingImage from '../assets/service1.png'; // Replace with actual image paths
import bookingStaysImage from '../assets/service2.png'; // Replace with actual image paths
import MaxWidthWrapper from './MaxWidthWrapper';

const Services = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 via-white to-blue-100">
      <MaxWidthWrapper>
      <h2 className="text-4xl font-bold text-center text-gray-900">Our Top Services</h2>

      <div className="mt-8 space-y-8">
        {/* Ticket Booking Service */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center hover:shadow-xl transition-shadow duration-300">
          <img 
            src={ticketBookingImage} 
            alt="Ticket Booking" 
            className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-full mb-4 md:mb-0 md:mr-6"
          />
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900">Ticket Booking</h3>
            <p className="mt-2 text-gray-600">Book tickets to your favorite destinations quickly and easily.</p>
          </div>
          <a 
            href="mailto:kartikeyansri@gmail.com?subject=Ticket Booking Inquiry&body=Please provide your booking details." 
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-indigo-700 transition duration-300 mt-4 md:mt-0"
          >
            Book Now
          </a>
        </div>

        {/* Booking Stays Service */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center hover:shadow-xl transition-shadow duration-300">
          <img 
            src={bookingStaysImage} 
            alt="Booking Stays" 
            className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-full mb-4 md:mb-0 md:mr-6"
          />
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900">Booking Stays</h3>
            <p className="mt-2 text-gray-600">Find the best places to stay at your destinations.</p>
          </div>
          <a 
            href="mailto:kartikeyansri@gmail.com?subject=Booking Stays Inquiry&body=Please provide your booking details." 
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-indigo-700 transition duration-300 mt-4 md:mt-0"
          >
            Book Now
          </a>
        </div>
      </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Services;