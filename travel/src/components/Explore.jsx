import React from 'react';

const ExploreSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Title and Description */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover new destinations and embark on unforgettable journeys with TravelerNest. Share your travel experiences with fellow adventurers in our vibrant community hub.
        </p>

        {/* Grid for Explore Options */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Connect */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-indigo-600">Connect</h3>
            <p className="text-gray-600">Join fellow travelers and build lasting friendships.</p>
          </div>

          {/* Share Tips */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-indigo-600">Share Tips</h3>
            <p className="text-gray-600">Exchange tips and advice with other adventurers.</p>
          </div>

          {/* Discover */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-indigo-600">Discover</h3>
            <p className="text-gray-600">Find new places to explore and hidden gems.</p>
          </div>

          {/* Community */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-indigo-600">Community</h3>
            <p className="text-gray-600">Engage with a global community of like-minded travelers.</p>
          </div>

          {/* Engage */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-indigo-600">Engage</h3>
            <p className="text-gray-600">Participate in discussions and share your journey.</p>
          </div>

          {/* Join Us */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-indigo-600">Join Us</h3>
            <p className="text-gray-600">Become part of our growing travel community.</p>
          </div>

          {/* Adventure */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-indigo-600">Adventure</h3>
            <p className="text-gray-600">Seek adventure and share your travel stories.</p>
          </div>

          {/* Travelers */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-indigo-600">Travelers</h3>
            <p className="text-gray-600">Connect with travelers from around the world.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
