import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Order from './Order';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Order />, document.getElementById('root'));
registerServiceWorker();
