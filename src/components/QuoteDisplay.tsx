'use client';

import { useState, useEffect, useCallback } from 'react';
import { Quote, getRandomQuote } from '@/data/quotes';

const MAX_RECENT_QUOTES = 5;

export default function QuoteDisplay() {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [recentQuotes, setRecentQuotes] = useState<Quote[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [fadeClass, setFadeClass] = useState('opacity-100');

  const changeQuote = useCallback(() => {
    setFadeClass('opacity-0');
    setTimeout(() => {
      setRecentQuotes(prevRecent => {
        const newQuote = getRandomQuote(prevRecent);
        setCurrentQuote(newQuote);
        
        // Update recent quotes list
        const updated = [...prevRecent, newQuote];
        return updated.length > MAX_RECENT_QUOTES 
          ? updated.slice(-MAX_RECENT_QUOTES) 
          : updated;
      });
      
      setFadeClass('opacity-100');
    }, 300);
  }, []); // 移除 recentQuotes 依赖

  useEffect(() => {
    // Set initial quote
    const initialQuote = getRandomQuote();
    setCurrentQuote(initialQuote);
    setRecentQuotes([initialQuote]);
    setIsLoaded(true);
  }, []); // 只在组件挂载时运行一次

  useEffect(() => {
    if (!isLoaded) return;
    
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
  }, [changeQuote, isLoaded]); // 依赖于 changeQuote 和 isLoaded

  if (!currentQuote || !isLoaded) {
    return null;
  }

  return (
    <div 
      className="text-center max-w-4xl mx-auto px-8 cursor-pointer select-none group focus:outline-none"
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
          &ldquo;{currentQuote.text}&rdquo;
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