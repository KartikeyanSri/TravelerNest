import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gradient-to-r from-blue-50 via-white to-blue-100 backdrop-blur-lg transition-all text-black py-8">
      <MaxWidthWrapper>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Company Info */}
        <div className="mb-4 md:mb-0 md:w-1/2">
          <h2 className="text-2xl font-bold">TravelerNest</h2>
        </div>
        
        {/* Location Details */}
        <div className="text-left md:text-right md:w-1/2">
          <p className="mt-2">Mahalaxmi Tower, 2nd Floor, Vaishali, Ghaziabad (201010)</p>
          <p className="mt-2">Phone: 9005024779</p>
          <p className="mt-2">Email: <a href="mailto:karutksri@gmail.com" className="text-blue-400 hover:underline">karutksri@gmail.com</a></p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-600">
        &copy; {new Date().getFullYear()} TravelerNest. All rights reserved.
      </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;