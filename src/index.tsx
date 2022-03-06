import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Grommet } from 'grommet';
import { theme } from './config/theme';
import reportWebVitals from './reportWebVitals';

// Styles
import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={theme}>
      <App />
    </Grommet>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
