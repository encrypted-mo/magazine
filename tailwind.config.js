module.exports = {
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],

  darkMode: false,

  theme: {
    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.primary.20', 'currentColor'),
    }),

    boxShadow: {
      DEFAULT: 'var(--shadow-soft)',
      soft: 'var(--shadow-soft)',
      raised: 'var(--shadow-raised)',
      floating: 'var(--shadow-floating)',
      inset: 'var(--shadow-inset)',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      primary: {
        DEFAULT: 'var(--primary)',
        95: 'var(--primary-95)',
        90: 'var(--primary-90)',
        80: 'var(--primary-80)',
        60: 'var(--primary-60)',
        40: 'var(--primary-40)',
        20: 'var(--primary-20)',
        10: 'var(--primary-10)',
        '05': 'var(--primary-05)',
      },

      secondary: 'var(--secondary)',
      'black-a-30': 'var(--black-a-30)',
      accent: 'var(--accent)',

      gold: {
        DEFAULT: 'var(--gold)',
        deep: 'var(--gold-deep)',
        dark: 'var(--gold-dark)',
        light: 'var(--gold-light)',
        highlight: 'var(--gold-highlight)',
      },

      surface: {
        DEFAULT: 'var(--surface)',
        muted: 'var(--surface-muted)',
        raised: 'var(--surface-raised)',
        overlay: 'var(--surface-overlay)',
      },

      'surface-border': 'var(--surface-border)',
      'surface-border-strong': 'var(--surface-border-strong)',

      pink: {
        DEFAULT: '#d98b9b',
        light: '#f7dce2',
      },
    },

    fontFamily: {
      sans: 'var(--font-sans)',
      serif: 'var(--font-serif)',
    },

    extend: {
      lineHeight: {
        article: '1.675',
      },

      inset: {
        '1/2': '50%',
      },

      spacing: {
        '1/2': '50%',
        '1/3': '33.3333%',
        '2/3': '66.6667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        full: '100%',
      },

      screens: {
        standalone: {
          raw: '(display-mode: standalone)',
        },
      },

      animation: {
        'fade-in': 'fadeIn 0.15s ease-in-out',
        'slide-up': 'slideUp 0.15s ease-in-out',
        'fade-in-up': 'fadeIn 0.15s ease-in-out, slideUp 0.15s ease-in-out',
      },

      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },

        slideUp: {
          from: {
            transform: 'translateY(50%)',
          },
          to: {
            transform: 'translateY(0)',
          },
        },
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
}
