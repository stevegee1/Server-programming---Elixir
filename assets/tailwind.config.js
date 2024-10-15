// See the Tailwind configuration guide for advanced usage
// https://tailwindcss.com/docs/configuration

const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./js/**/*.js', '../lib/*_web.ex', '../lib/*_web/**/*.*ex'],
  theme: {
    spacing: {
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.125rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      18: '4.5rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      30: '7.5rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      56: '14rem',
      64: '16rem',
      72: '17.5rem',
      80: '20rem',
      96: '24rem',
      112: '28rem',
      128: '32rem',
      144: '36rem',
      160: '40rem',
      176: '44rem',
      192: '48rem',
      204: '50rem',
      208: '52rem',
    },
    fontFamily: {
      body: ['"Inter"', 'sans-serif'],
      heading: ['"Public Sans"', 'sans-serif'],
    },
    screens: {
      mmd: '900px',
      ...defaultTheme.screens,
    },
    extend: {
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
        '20': 'repeat(20, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      maxWidth: {
        main: '100rem',
        half: '50rem',
        32: '61rem',
        full: '100%',
        xl: '120rem',
        modal: '24rem',
      },
      screens: {
        xs: '400px',
        s: '576px',
        // => @media (min-width: 992px) { ... }
      },
      borderColor: {
        'table-border': '#EDF2F7',
      },
      colors: {
        primary: {
          DEFAULT: '#231942',
          hover: '#160F2C',
        },
        neutral: {
          accent: '#FFFDFA',
          black: '#332952',
          'black-2': ' #F4F6FA',
        },
        white: {
          DEFAULT: '#ffffff',
        },
        main: {
          accent: '#FCD0A1',
        },
        light: {
          DEFAULT: '#FAFAFB',
          border: '#EDF2F7',
          theme: '#E0DAF1',
          different: '#fafbff',
          body: '#425466',
        },
        mute: {
          DEFAULT: '#A19EA9',
          unknown: '#807E87',
          disabled: '#A8A8A8',
        },
        error: {
          DEFAULT: '#F76767',
        },
        success: {
          DEFAULT: '#66CB9F',
        },
        secondary: {
          DEFAULT: '#E4ECF7',
        },
        yellow: {
          DEFAULT: '#FFFF00',
          1: '#FFF5E0',
          2: '#FFAB00',
          3: '#FCA004',
          4: '#FCD28C',
          5: '#FFFBED',
        },
        blue: {
          DEFAULT: '#00F',
          1: '#052136',
          2: '#151E28',
          3: '#99A0AE',
          4: '#5D6167',
          5: '#0052EA',
          6: '#A7C5FD',
          7: '#F1F6FD',
        },
        green: {
          DEFAULT: '#0F0',
          1: '#429B6A',
          2: '#627F6F',
          3: '#E0FAE6',
        },
        red: {
          DEFAULT: '#F00',
          1: '#E3452F',
          2: 'rgba(227, 69, 47, 0.1)',
        },
        white: {
          DEFAULT: '#FFF',
          1: '#F3F3F5',
          2: '#F6F8FA',
          3: '#ECF0F3',
          4: '#E8EEF4',
          5: '#D4D6D9',
          6: '#EFF1F3',
          7: '#EDEDF2',
          8: '#F5F5F5',
        },
        black: {
          DEFAULT: '#000',
          1: '#94A6B3',
          2: '#666666',
          3: '#1F2328',
        },
        emerald: {
          DEFAULT: '#2ecc71',
          50: '#eafaf1',
          500: '#2ecc71',
          800: '#27ae60',
        },
        cyan: {
          DEFAULT: '#00FFFF',
          900: '#00FFFF',
        },
        rose: {
          DEFAULT: '#FF007F',
          50: '#FFF1F2',
          500: '#FF007F',
          900: '#C5005C',
        },
      },
      fontSize: {
        '3xxl': ['2rem', '130%'],
        '4xxl': ['2.5rem', '3rem'],
        '5xxl': ['3.5rem', '5rem'],
        '7xxl': ['5rem', '6rem'],
      },
      lineHeight: {
        h2: '56px',
        '4-5': '2rem',
      },
      width: {
        '48r': '48%',
        '42r': '42%',
        100: '25rem',
      },
      boxShadow: {
        card: '0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)',

        input:
          '0px 1px 2px rgba(50, 50, 71, 0.08), 0px 0px 1px rgba(50, 50, 71, 0.2)',
        divide:
          '0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px rgba(50, 50, 71, 0.05)',
        'nav-shadow':
          '0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);',
        'shadow-btn':
          '0px 0px 1px rgba(12, 26, 75, 0.2), 0px 1px 3px rgba(50, 50, 71, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // Allows prefixing tailwind classes with LiveView classes to add rules
    // only when LiveView classes are applied, for example:
    //
    //     <div class="phx-click-loading:animate-ping">
    //
    plugin(({ addVariant }) =>
      addVariant('phx-no-feedback', ['.phx-no-feedback&', '.phx-no-feedback &'])
    ),
    plugin(({ addVariant }) =>
      addVariant('phx-click-loading', [
        '.phx-click-loading&',
        '.phx-click-loading &',
      ])
    ),
    plugin(({ addVariant }) =>
      addVariant('phx-submit-loading', [
        '.phx-submit-loading&',
        '.phx-submit-loading &',
      ])
    ),
    plugin(({ addVariant }) =>
      addVariant('phx-change-loading', [
        '.phx-change-loading&',
        '.phx-change-loading &',
      ])
    ),
  ],
};
