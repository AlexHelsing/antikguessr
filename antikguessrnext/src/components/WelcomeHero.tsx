import React from 'react';
import Link from 'next/link';

const WelcomeHero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-amber-100 to-amber-300 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-amber-800 mb-6 animate-pulse">
          Antique Guessr
        </h1>
        <p className="text-xl sm:text-2xl text-amber-700 mb-8">
          Test your knowledge of antiques and guess their true value!
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-white p-4 rounded-lg shadow-md transform rotate-3 hover:rotate-0 transition-transform">
            🏺
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md transform -rotate-2 hover:rotate-0 transition-transform">
            ⏰
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md transform rotate-6 hover:rotate-0 transition-transform">
            💍
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md transform -rotate-4 hover:rotate-0 transition-transform">
            🖼️
          </div>
        </div>
        <Link href="/games" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full text-xl transition-colors duration-300 transform hover:scale-105">
          Start Guessing!
        </Link>
      </div>
    </div>
  );
};

export default WelcomeHero;