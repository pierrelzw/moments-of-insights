export interface Quote {
  text: string;
  author: string;
}

export const quotes: Quote[] = [
  {
    text: "Nothing is so embarrassing as watching someone do something that you said could not be done.",
    author: "Sam Ewing"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    text: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    text: "Do something today that your future self will thank you for.",
    author: "Sean Patrick Flanery"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Don't be afraid to give your best to what seemingly are small jobs. Every time you conquer one it makes you that much stronger.",
    author: "Dale Carnegie"
  },
  {
    text: "If you look at what you have in life, you'll always have more.",
    author: "Oprah Winfrey"
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    text: "Everything you've ever wanted is on the other side of fear.",
    author: "George Addair"
  },
  {
    text: "Success is not how high you have climbed, but how you make a positive difference to the world.",
    author: "Roy T. Bennett"
  },
  {
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  }
];

// Keep track of recently shown quotes to avoid immediate repetition
let recentQuotes: Quote[] = [];
const maxRecentQuotes = 5;

export function getRandomQuote(): Quote {
  // Filter out recently shown quotes if we have enough quotes
  const availableQuotes = quotes.length > maxRecentQuotes 
    ? quotes.filter(quote => !recentQuotes.includes(quote))
    : quotes;
  
  const randomIndex = Math.floor(Math.random() * availableQuotes.length);
  const selectedQuote = availableQuotes[randomIndex];
  
  // Add to recent quotes and maintain the limit
  recentQuotes.push(selectedQuote);
  if (recentQuotes.length > maxRecentQuotes) {
    recentQuotes.shift();
  }
  
  return selectedQuote;
}
