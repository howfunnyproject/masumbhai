/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0D2229', // primary background (deep teal-charcoal)
          soft: '#162B33',    // secondary background
        },
        paper: {
          DEFAULT: '#FFFFFF', // surface
          light: '#F8F6F2',   // light section
        },
        text: {
          primary: '#1F2937',
          secondary: '#64748B',
        },
        gold: {
          DEFAULT: '#C5A059', // premium accent
          hover: '#D4AF37',   // hover gold
        },
        brand: '#D9384A',     // brand accent
        success: '#2E8B57',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      borderRadius: {
        card: '14px',
      },
      boxShadow: {
        premium: '0 20px 60px -20px rgba(13, 34, 41, 0.25)',
        soft: '0 8px 30px -12px rgba(13, 34, 41, 0.15)',
      },
      maxWidth: {
        content: '1180px',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
