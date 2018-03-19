import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import registerServiceWorker from './registerServiceWorker';

render(
    <MuiThemeProvider >
      <App />
    </MuiThemeProvider>
  ,
  document.getElementById('root')
);
