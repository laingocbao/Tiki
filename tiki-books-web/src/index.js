import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<ListBookTikiProduct />, document.getElementById('root'));
ReactDOM.render((
    <App />
), document.getElementById('root'));

serviceWorker.unregister();
