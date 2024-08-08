"use client"

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-amber-800 p-4 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link href="/" className="text-amber-100 text-3xl md:text-4xl font-bold font-serif">
          Antique Guessr
        </Link>

        { }
        <button 
          className="md:hidden text-amber-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        { }
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex w-full md:w-auto mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-4`}>
          <Link href="/spel" className="block md:inline-block bg-amber-600 text-amber-100 px-4 py-2 rounded-lg hover:bg-amber-500 transition duration-300 font-medium text-center">
            Spela Nu
          </Link>
          <Link href="/leaderboard" className="block md:inline-block bg-amber-700 text-amber-100 px-4 py-2 rounded-lg hover:bg-amber-600 transition duration-300 font-medium text-center">
            Leaderboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;