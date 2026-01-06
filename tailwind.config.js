/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F1',
        charcoal: '#1E1E1E',
        accent: '#C7A45D',     // gold
        burgundy: '#3B0A12',   // deep red
        muted: '#6B6B6B',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)',
        elevated: '0 18px 50px rgba(0,0,0,0.14)',
      },
      fontFamily: {
  brand: ['"Cinzel"', '"Cormorant Garamond"', 'serif'],
  serif: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
  sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
},

        serif: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.12em',
      }
    },
  },
  plugins: [],
}
