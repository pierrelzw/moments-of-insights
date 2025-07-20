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
    <div className="text-center max-w-4xl mx-auto px-8">
      <div className={`transition-opacity duration-300 ${fadeClass}`}>
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-relaxed mb-6 select-text">
          &ldquo;{currentQuote.text}&rdquo;
        </blockquote>
        <cite className="text-lg md:text-xl text-gray-600 font-medium select-text">
          — {currentQuote.author}
        </cite>
      </div>
      
      {/* 切换按钮 */}
      <div className="mt-12 flex flex-col items-center space-y-4">
        <button
          onClick={changeQuote}
          className="group transition-all duration-200 focus:outline-none"
          aria-label="Get a new quote"
        >
          <svg 
            className="w-6 h-6 transition-all duration-300 text-gray-400 hover:text-gray-600 group-hover:rotate-180" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
        
        <p className="text-sm text-gray-400">
          或按 <kbd className="px-1.5 py-0.5 text-xs bg-gray-200 rounded">Space</kbd> 键切换
        </p>
      </div>
    </div>
  );
}