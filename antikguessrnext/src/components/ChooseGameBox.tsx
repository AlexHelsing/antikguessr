import React from 'react';
import Link from 'next/link';

interface ChooseGameBoxProps {
  gameName: string;
  gameLink: string;
  gameEmoji: string;
  gameDescription: string;
}

const ChooseGameBox: React.FC<ChooseGameBoxProps> = ({ gameName, gameLink, gameEmoji, gameDescription }) => {
  return (
    <Link href={gameLink} className="block m-5">
      <div className="w-64 h-96 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 relative bg-gradient-to-br from-amber-300 to-amber-600">
        <div className="absolute inset-0 opacity-20">
        </div>
        <div className="h-full flex flex-col items-center justify-center p-6 relative z-10">
          <div className="text-6xl mb-4">{gameEmoji}</div>
          <h3 className="text-2xl font-bold text-white text-center mb-2">{gameName}</h3>
          <p className="text-amber-100 text-center">{gameDescription}</p>
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <span className="bg-white text-amber-800 px-4 py-2 rounded-full font-bold animate-bounce">
            Play Now
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ChooseGameBox;