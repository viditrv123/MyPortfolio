import React from 'react';
import Routes from './Routes';
import ReactDOM from 'react-dom';

ReactDOM.render(<Routes basename={process.env.PUBLIC_URL} />, document.getElementById('root'));
