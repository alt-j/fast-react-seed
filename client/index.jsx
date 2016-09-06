import React from 'react';
import {render} from 'react-dom';
import {App} from '../components/app.jsx';

render(<App {...window.config} />, document.body);
