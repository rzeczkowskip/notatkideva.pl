const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors');

const screens = { ...defaultTheme.screens };
delete screens['2xl'];

const colorLead = {
  light: '#88bbee',
  base: '#5577bb',
};

const socialColors = {
  twitter: '#1DA1F2',
  twitch: '#6441A4',
  facebook: '#0979f2',
};

module.exports = {
  purge: {
    content: [
      `${__dirname}/../layouts/**/*.html`,
      `${__dirname}/../content/**/*.html`,
      `${__dirname}/../content/**/*.md`,
      `${__dirname}/../data/**/*`,
    ],
    options: {
      safelist: [
        /^text-social-/
      ]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Lato2', 'sans-serif'],
    },
    screens,
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        lead: colorLead,
        social: socialColors,
        link: colorLead.base,
        gray: colors.gray,
      },
      transitionDelay: {
        0: '0ms',
      },
    },
  },
  variants: {
    extend: {
      width: ['focus'],
      margin: ['focus', 'last'],
      padding: ['focus', 'last'],
      borderWidth: ['last']
    },
  },
};
