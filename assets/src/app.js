import '@fontsource/mulish/latin-ext-400.css';
import '@fontsource/mulish/latin-ext-600.css';
import '@fontsource/mulish/latin-ext-800.css';

import './app.scss';
import './syntax.css';

import useToggle from './components/toggle';
import usePostProgress from './components/post-progress';

useToggle(
  document.querySelector('#nav-toggle'),
  document.querySelectorAll('.nav .nav-menu'),
);

usePostProgress('.post-progress');
