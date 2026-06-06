/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/views/**/*.twig',
    './src/assets/js/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          50: 'color-mix(in srgb, var(--color-primary) 10%, white)',
          100: 'color-mix(in srgb, var(--color-primary) 20%, white)',
          200: 'color-mix(in srgb, var(--color-primary) 40%, white)',
          300: 'color-mix(in srgb, var(--color-primary) 60%, white)',
          400: 'color-mix(in srgb, var(--color-primary) 80%, white)',
          500: 'var(--color-primary)',
          600: 'color-mix(in srgb, var(--color-primary) 85%, black)',
          700: 'color-mix(in srgb, var(--color-primary) 70%, black)',
          800: 'color-mix(in srgb, var(--color-primary) 55%, black)',
          900: 'color-mix(in srgb, var(--color-primary) 40%, black)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
        },
      },
      fontFamily: {
        sans: ['var(--font-primary)', 'Tajawal', 'Cairo', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: 'var(--border-radius)',
        btn: 'var(--border-radius-btn)',
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({ strategy: 'class' }),
    require('@tailwindcss/line-clamp'),
  ],
};
