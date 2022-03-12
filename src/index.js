import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";
import Auth0ProviderWithHistory from './auth0Provider';
import { applyMiddleware, createStore } from 'redux';
import dataReducer from './redux/store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const store = createStore(dataReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Auth0ProviderWithHistory>
          <App/>
        </Auth0ProviderWithHistory>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
