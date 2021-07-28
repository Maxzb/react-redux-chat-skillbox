import React from 'react';
import { deletePost } from '../actions/actions';

const Post = ({ post }) => {
   return (
      <li key={post.id}>
         <div className="data-chat">
            <span className="username">{post.username}</span>
            <span className="date">{post.date}</span>
            <span className="delete" onClick={() => deletePost(post.id)}>Удалить</span>
         </div>
         <p className="text">{post.text}</p>
      </li>
   )
}

export default Post;