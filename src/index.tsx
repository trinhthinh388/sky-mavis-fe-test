import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Grommet } from 'grommet';
import { theme } from './config/theme';
import store from './redux/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

// Styles
import './styles/global.css';
import 'react-loading-skeleton/dist/skeleton.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Grommet theme={theme}>
        <App />
      </Grommet>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
