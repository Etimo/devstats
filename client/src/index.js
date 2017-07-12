import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';

require('./favicon.ico'); // Tell webpack to load favicon.ico

const reducers = {
  // custom reducers here...
  form: formReducer
};

const store = createStore(combineReducers(reducers));

ReactDOM.render(
    (<Provider store={store}>
      <App />
    </Provider>),
  document.getElementById('app')
);

