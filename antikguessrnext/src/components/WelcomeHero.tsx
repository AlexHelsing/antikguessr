import React from 'react';
import Link from 'next/link';

const WelcomeHero: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-amber-800 mb-6">
          Antik Guessr
        </h1>
        <p className="text-xl sm:text-2xl text-amber-700 mb-8">
          Testa din kunskap om antika och vintage föremål och gissa deras värde!
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-white p-4 rounded-lg shadow-md rotate-3 hover:animate-spin-with-rotation">
            🏺
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md rotate-2 hover:animate-spin-with-rotation">
            ⏰
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md rotate-6 hover:animate-spin-with-rotation">
            💍
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md rotate-4 hover:animate-spin-with-rotation">
            🖼️
          </div>
        </div>
        <Link href="/spel" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full text-xl transition-colors duration-300 transform hover:scale-105 animate-bounce">
          Börja gissa!
        </Link>
      </div>
    </div>
  );
};

export default WelcomeHero;