const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');

const plugins = [autoprefixer];
if (process.env.NODE_ENV === 'production') {
  plugins.push(purgecss({
    content: [
      `${__dirname}/layouts/**/*.html`,
      `${__dirname}/content/**/*.html`,
      `${__dirname}/content/**/*.md`,
      `${__dirname}/data/**/*`,
    ],
    safelist: {
      deep: [/^highlight/, /^markup/],
      standard: ['pre', 'code', 'show'],
    },
  }));
}

module.exports = {
  plugins,
};
