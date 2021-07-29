import { CREATE_POST } from './types'
import { DELETE_POST } from './types'

const initialState = {
   posts: []
}

export const postsReducer = (state = initialState, action) => {
   switch(action.type) {
      case CREATE_POST:
         return { ...state, posts: state.posts.concat([action.payload]) }

      case DELETE_POST:
         /* return state.map(post => {
            if (post.id === action.id) {
               post.classList.add('checked');
            }
         }) */

         return {...state, posts: state.posts.filter((item, i) => i !== action.payload)};
         
      default: return state
   }
}