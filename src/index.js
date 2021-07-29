import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import App from './containers/App';
import { compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { Reducer } from './reducers/reducer'

const persistedState = localStorage.getItem('postsStore') 
                        ? JSON.parse(localStorage.getItem('postsStore'))
                        : {}

const store = createStore(Reducer, persistedState, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

store.subscribe(() => {
  localStorage.setItem('postsStore', JSON.stringify(store.getState()))
})


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