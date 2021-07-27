import React from 'react';
import Post from './Post';

export default ({ posts }) => {
   return (
      posts.map(post => <Post post={post} key={post} />)
   )
}

{/* <div className="wrapper-list">
<h1 className="h1">Чат на <span>React</span></h1>

<ul className="chatlist" id="chatlist">
   <Post post={post}/>
</ul>
</div> */}