import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <App />  

  </React.StrictMode>,
  document.getElementById('root')
);

// ayaw diri pag edit (dili ni sya para sa index) didto mo sa App.js pag butang ug tags
// mga brad karing "<App />" mao ni ang DOM renderer