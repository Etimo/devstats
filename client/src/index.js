import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux';
import registrationsReducer from './reducers/registrationReducer';
import reduxThunk from 'redux-thunk';

require('./favicon.ico'); // Tell webpack to load favicon.ico

const reducers = {
  // custom reducers here...
  registration: registrationsReducer,
  form: formReducer
};

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(combineReducers(reducers));

ReactDOM.render(
    (<Provider store={store}>
      <App />
    </Provider>),
  document.getElementById('app')
);

