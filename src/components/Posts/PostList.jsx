import React from 'react'
import Post from './Post';

function PostList({resultPostsFromPage, users}) {
  
  return (
    <>
      {resultPostsFromPage.map(item => 
      <Post 
        key={item.id} 
        title={item.title} 
        body={item.body}  
        postId={item.id}
        userObj={users.find(user => user.id === item.userId)}
      />
      )}
    </>
    
  )
}

export default PostList;