import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';

export const Reducer = combineReducers ({
   posts: postsReducer
})