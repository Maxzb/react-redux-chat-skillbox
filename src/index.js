import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import App from './containers/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Reducer } from './reducers/reducer'

const store = createStore(Reducer)


const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}