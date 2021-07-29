import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/actions';

const Post = ({ post, deletePost, idx }) => {
   return (
      <li key={post.id} id={post.id}>
         <div className="data-chat">
            <span className="username">{post.username}</span>
            <span className="date">{post.date}</span>
            <span className="delete" onClick={() => deletePost(idx)}>Удалить</span>
         </div>
         <p className="text">{post.text}</p>
      </li>
   )
}

const mapDispatchToProps = dispatch => ({
   deletePost: key => dispatch(deletePost(key))
})

export default connect(null, mapDispatchToProps)(Post);