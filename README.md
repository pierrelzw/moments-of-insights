# A Little Inspiration 🌟

A minimalist inspiration website that replicates the beautiful design of [altl.io](https://altl.io/). This project features dynamic gradient backgrounds and rotating inspirational quotes to brighten your day.

## ✨ Features

- **Dynamic Gradient Background**: Beautiful, ever-changing color gradients that shift smoothly over time
- **Inspirational Quotes**: Curated collection of motivational quotes that rotate every 30 seconds
- **Minimalist Design**: Clean, distraction-free interface focused on content
- **Responsive Layout**: Perfect display on all devices, from mobile to desktop
- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Design Philosophy

This project embraces extreme minimalism:
- **Single Purpose**: Focus entirely on delivering daily inspiration
- **Visual Calm**: Soft, evolving colors that create a peaceful atmosphere  
- **Typography First**: Clean, readable fonts with proper hierarchy
- **No Distractions**: Zero advertisements, popups, or unnecessary elements

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for utility-first styling
- **Fonts**: Inter font family for optimal readability
- **Deployment**: Ready for Vercel deployment

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page component
├── components/
│   ├── DynamicBackground.tsx  # Animated gradient background
│   └── QuoteDisplay.tsx       # Quote display logic
└── data/
    └── quotes.ts        # Inspirational quotes collection
```

## 🎯 Customization

### Adding New Quotes
Edit `src/data/quotes.ts` to add your favorite inspirational quotes:

```typescript
{
  text: "Your inspiring quote here",
  author: "Quote Author"
}
```

### Modifying Background Colors
Adjust the gradient colors in `src/components/DynamicBackground.tsx` by changing the HSL values.

### Updating Author Links
Customize the footer links in `src/app/page.tsx` to point to your GitHub and Ko-fi pages.

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/quote-new-begin)

## 🙏 Inspiration

This project is inspired by the beautiful simplicity of [altl.io](https://altl.io/) created by [Rog](https://rogshafi.com/). A perfect example of how minimalism can create maximum impact.

## 📝 License

MIT License - feel free to use this project as inspiration for your own creations!

---

**Made with ❤️ for daily inspiration**
