import React from 'react';

export default ({ post }) => {
   return (
      <li>
         <div className="data-chat">
            <span className="username">{post.username}</span>
            <span className="date">{post.date}</span>
            <span className="delete">Удалить</span>
         </div>
         <p className="text">{post.text}</p> 
      </li>
   )
}