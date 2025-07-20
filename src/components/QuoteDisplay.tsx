'use client';

import { useState, useEffect, useCallback } from 'react';
import { Quote, getRandomQuote } from '@/data/quotes';

export default function QuoteDisplay() {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [fadeClass, setFadeClass] = useState('opacity-100');

  const changeQuote = useCallback(() => {
    setFadeClass('opacity-0');
    setTimeout(() => {
      setCurrentQuote(getRandomQuote());
      setFadeClass('opacity-100');
    }, 300);
  }, []);

  useEffect(() => {
    // Set initial quote
    setCurrentQuote(getRandomQuote());
    setIsLoaded(true);
    
    // Change quote every 30 seconds
    const interval = setInterval(changeQuote, 30000);
    
    // Global keyboard shortcut (Space key)
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        // Only trigger if not in an input field
        const target = e.target as HTMLElement;
        if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
          e.preventDefault();
          changeQuote();
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    
    return () => {
      clearInterval(interval);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [changeQuote]);

  if (!currentQuote || !isLoaded) {
    return null;
  }

  return (
    <div 
      className="text-center max-w-4xl mx-auto px-8 cursor-pointer select-none group"
      onClick={changeQuote}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          changeQuote();
        }
      }}
      aria-label="Click to see a new quote"
    >
      <div className={`transition-opacity duration-300 ${fadeClass}`}>
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-200">
          "{currentQuote.text}"
        </blockquote>
        <cite className="text-lg md:text-xl text-gray-600 font-medium group-hover:text-gray-500 transition-colors duration-200">
          — {currentQuote.author}
        </cite>
      </div>
      <div className="mt-8 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
        <p className="text-sm text-gray-400">
          Click or press <kbd className="px-1.5 py-0.5 text-xs bg-gray-200 rounded">Space</kbd> for a new quote
        </p>
      </div>
    </div>
  );
}
