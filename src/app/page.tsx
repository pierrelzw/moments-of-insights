'use client';

import { useState } from 'react';
import DynamicBackground from '@/components/DynamicBackground';
import QuoteDisplay from '@/components/QuoteDisplay';
import DonationModal from '@/components/DonationModal';

export default function Home() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <>
      <DynamicBackground />
      <div className="min-h-screen flex flex-col justify-center items-center px-4">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-xl md:text-2xl text-gray-700 font-light tracking-wide">
            a little inspiration
          </h1>
        </header>

        {/* Main Quote Display */}
        <main className="flex-1 flex items-center justify-center w-full">
          <QuoteDisplay />
        </main>

        {/* Footer */}
        <footer className="mb-8 text-center">
          <div className="text-sm text-gray-600 space-x-4">
            <a 
              href="https://github.com/pierrelzw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              made by zhiwei
            </a>
            <button
              onClick={() => setIsDonationModalOpen(true)}
              className="hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              给他买杯咖啡
            </button>
          </div>
        </footer>
      </div>

      {/* 打赏模态框 */}
      <DonationModal 
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </>
  );
}
