import DynamicBackground from '@/components/DynamicBackground';
import QuoteDisplay from '@/components/QuoteDisplay';

export default function Home() {
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
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              made by you
            </a>
            <a 
              href="https://ko-fi.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              buy me a coffee
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
