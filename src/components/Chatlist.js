import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

const Posts = ({ syncPosts }) => {
   if (!syncPosts.length) {
      return <p className="empty-posts">Пока сообщений нет</p>
   }
   return (
      syncPosts.map((post, i) => <Post post={post} key={i} idx={i} />)
   )
}

const mapStateToProps = state => {
   return {
      syncPosts: state.posts.posts
   }
}

export default connect(mapStateToProps, null)(Posts);