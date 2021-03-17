import { Application } from 'stimulus';
import { definitionsFromContext } from 'stimulus/webpack-helpers';

import './app.css';
import './syntax.css';
import './fonts/lato.css';

const app = Application.start();
app.load(definitionsFromContext(require.context('./controllers', true, /\.(j|t)sx?$/)));
