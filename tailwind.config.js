const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        'custom-blue': '#0369a1',
      },

      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'spin-delay': 'spin 6s linear infinite -3s'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};

module.exports = config;
