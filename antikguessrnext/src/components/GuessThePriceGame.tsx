"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface AntiqueItem {
  id: string;
  artist: string;
  price: number;
  image_url: string;
  description: string;
}

interface GuessThePriceGameProps {
  itemType: string;
}


const GuessThePriceGame: React.FC<GuessThePriceGameProps> = ({ itemType }) => {
  const [item, setItem] = useState<AntiqueItem | null>(null);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    fetchNewItem();
  }, []);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleDescriptionToNotExpanded = () => {
    setIsExpanded(false);
  };

  const fetchNewItem = async () => {
    toggleDescriptionToNotExpanded();
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:5144/api/Items/${itemType}/random`);
      const data = await response.json();
      setItem(data);
      setFeedback('');
      setUserGuess('');
    } catch (error) {
      console.error('Failed to fetch item:', error);
    }
    setIsLoading(false);
  };

  const handleGuess = () => {
    if (!item) return;
    
    const guessValue = parseFloat(userGuess);
    if (isNaN(guessValue)) {
      setFeedback('Please enter a valid number.');
      return;
    }

    const difference = Math.abs(guessValue - item.price);
    const percentDifference = (difference / item.price) * 100;

    if (percentDifference <= 10) {
      setFeedback("Amazing guess! You're within 10% of the actual price!");
    } else if (percentDifference <= 25) {
      setFeedback("Good guess! You're within 25% of the actual price.");
    } else if (guessValue < item.price) {
      setFeedback('Too low! Try guessing higher.');
    } else {
      setFeedback('Too high! Try guessing lower.');
    }
  };

  if (isLoading) {
    return <div className="text-center text-2xl">Laddar...</div>;
  }

  if (!item) {
    return <div className="text-center text-2xl">Misslyckades att ladda. Vänligen försök igen.</div>;
  }

  return (
    <div className="w-3/5 min-h-screen mx-auto p-6 rounded-lg">
    <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">Gissa Priset!</h2>
    
    <div className="mb-6 relative h-[400px]"> {/* Fixed height container */}
      <Image 
        src={item.image_url} 
        alt={item.description} 
        fill
        className="object-contain rounded-lg"
      />
    </div>
      
    <div className="mb-6 text-center">
        <p className="text-xl font-semibold mb-2">{item.artist}</p>
        <div className={`relative ${isExpanded ? '' : 'h-[4.5em] overflow-hidden'}`}>
          <p className="text-lg">{item.description}</p>
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-8"></div>
          )}
        </div>
        {item.description.length > 250 && (
          <button 
            onClick={toggleDescription} 
            className="mt-2 text-amber-600 hover:text-amber-800"
          >
            {isExpanded ? 'Läs Mindre' : 'Läs Mer'}
          </button>
        )}
      </div>
      
      <div className="flex items-center justify-center mb-6">
        <input
          type="number"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          className="text-2xl p-2 w-48 border-2 border-amber-500 rounded-l-lg focus:outline-none focus:border-amber-600"
          placeholder="Din Gissning"
        />
        <button
          onClick={handleGuess}
          className="bg-amber-500 hover:bg-amber-600 text-white text-2xl p-2 rounded-r-lg transition duration-300"
        >
          Gissa!
        </button>
      </div>
      
      {feedback && (
        <div className="text-center text-xl font-semibold mb-6 animate-bounce">
          {feedback}
        </div>
      )}
      
      <div className="text-center">
        <button
          onClick={fetchNewItem}
          className="bg-amber-700 hover:bg-amber-800 text-white text-xl p-3 rounded-lg transition duration-300"
        >
          Nästa Föremål
        </button>
      </div>
    </div>
  );
};

export default GuessThePriceGame;