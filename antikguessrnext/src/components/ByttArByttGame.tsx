"use client";

import React, { useState, useEffect } from 'react';

interface AntiqueItem {
  id: string;
  artist: string;
  price: number;
  image_url: string;
  description: string;
}

const ByttArByttGame: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [items, setItems] = useState<AntiqueItem[]>([]);
  const [pickedItems, setPickedItems] = useState<Set<string>>(new Set());
  const [showPlayAgain, setShowPlayAgain] = useState<boolean>(false);

  const fetchNewItems = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:5144/api/Items/random`);
      const data: AntiqueItem[] = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Failed to fetch items:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchNewItems();
  }, []);

  const handlePickItem = (item: AntiqueItem) => {
    const newPickedItems = new Set(pickedItems).add(item.id);
    setPickedItems(newPickedItems);
    
    // Check if all items have been picked
    if (newPickedItems.size === items.length) {
      setShowPlayAgain(true);
    }
  };

  const formatPrice = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const handlePlayAgain = () => {
    window.location.reload();
  };

  // Extract and sort prices from items
  const allPrices = items.map(item => item.price).sort((a, b) => b - a);

  return (
    <div className="flex p-4">
      {isLoading ? (
        <p className='animate-pulse'>Laddar...</p>
      ) : (
        <div className="flex flex-row justify-evenly">
          <div className="grid w-3/5 grid-cols-2 gap-4">
            {items.map(item => (
              <div
                key={item.id}
                className={`border border-4 rounded-xl border-amber-400 p-2 cursor-pointer ${
                  pickedItems.has(item.id) ? 'opacity-50' : ''
                }`}
                onClick={() => handlePickItem(item)}
              >
                <div className="relative group">
                    <img 
                    src={item.image_url} 
                    alt={item.artist} 
                    className="w-full h-96 object-cover transition-transform duration-100 ease-in-out"
                    />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100 flex items-center justify-center">
                        <div className={`absolute z-10 transform scale-0 ${
                        !pickedItems.has(item.id) ? 'group-hover:scale-100' : ''
                        } transition-transform duration-100 origin-center`}>
                        <img 
                        src={item.image_url} 
                        alt={item.artist} 
                        className="max-w-[110%] max-h-[110%] object-contain shadow-lg group-hover:border-4 group-hover:rounded-lg group-hover:border-amber-400"
                        />
                        </div>
                    </div>
                </div>
                <h3 className="text-lg font-semibold mt-2">{item.artist}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <div className="relative">
            <div className="ml-4 sticky top-4">
              <h2 className="text-8xl font-bold  text-center mb-1">Pris</h2>
              <ul>
                {allPrices.map((price, index) => (
                  <li
                    key={index}
                    className={`mb-2 text-5xl font-semibold border-4 border-amber-400 rounded-xl text-center p-1 ${
                      items.some(item => item.price === price && pickedItems.has(item.id))
                        ? 'text-red-500 line-through'
                        : ''
                    }`}
                  >
                    <p>{formatPrice(price)}kr</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
        {showPlayAgain && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-amber-200  p-8 rounded-lg shadow-lg text-center">
                    <h2 className="text-2xl text-amber-900 font-bold mb-4">Spel över!</h2>
                    <p className="mb-6 text-amber-900 font-semibold">Spela igen?</p>
                    <button onClick={handlePlayAgain} className="bg-amber-700 hover:bg-amber-600 text-amber-100 font-bold py-2 px-4 rounded">Ja!</button>
                </div>
        </div>
        )}
    </div>
  );
};

export default ByttArByttGame;