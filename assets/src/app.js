import './app.scss';
import './syntax.scss';

import useToggle from './components/toggle';
import usePostProgress from './components/post-progress';

useToggle(
  document.querySelector('#nav-toggle'),
  document.querySelectorAll('.nav .nav-menu'),
);

usePostProgress('.post-progress');
