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

const GuessThePriceGame: React.FC = () => {
  const [item, setItem] = useState<AntiqueItem | null>(null);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchNewItem();
  }, []);

  const fetchNewItem = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5144/api/Items/klockor/random');
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
    return <div className="text-center text-2xl">Loading...</div>;
  }

  if (!item) {
    return <div className="text-center text-2xl">Failed to load item. Please try again.</div>;
  }

  return (
    <div className="w-full min-h-screen mx-auto p-6 bg-gradient-to-br from-amber-100 to-amber-300 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-amber-800 mb-6 text-center">Guess the Price!</h2>
      
      <div className="mb-6">
        <Image 
          src={item.image_url} 
          alt={item.description} 
          width={400} 
          height={400} 
          className="mx-auto rounded-lg shadow-md"
        />
      </div>
      
      <div className="mb-6 text-center">
        <p className="text-xl font-semibold mb-2">{item.artist}</p>
        <p className="text-lg">{item.description}</p>
      </div>
      
      <div className="flex items-center justify-center mb-6">
        <input
          type="number"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          className="text-2xl p-2 w-48 border-2 border-amber-500 rounded-l-lg focus:outline-none focus:border-amber-600"
          placeholder="Your guess"
        />
        <button
          onClick={handleGuess}
          className="bg-amber-500 hover:bg-amber-600 text-white text-2xl p-2 rounded-r-lg transition duration-300"
        >
          Guess!
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
          Next Item
        </button>
      </div>
    </div>
  );
};

export default GuessThePriceGame;