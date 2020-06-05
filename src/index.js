import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MsalProvider } from "./msal-context";
import { msalConfig, loginRequest } from "./auth-config";

ReactDOM.render(
  <MsalProvider
  config={msalConfig}
  scopes={loginRequest}
>
  <App />
</MsalProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
