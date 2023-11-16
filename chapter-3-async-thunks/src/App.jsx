import React from 'react'
import PostLists from './features/posts/PostLists'
import AddPostForm from './features/posts/AddPostForm'

const App = () => {
  return (
    <div>
      <AddPostForm />
      <PostLists />
    </div>
  )
}

export default App
