import { CREATE_POST } from '../reducers/types'
import { DELETE_POST } from '../reducers/types'

export function createPost(post) {
   return {
      type: CREATE_POST,
      payload: post
   }
}

export function deletePost(post) {
   return {
      type: DELETE_POST,
      payload: post
   }
}