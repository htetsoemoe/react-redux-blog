import React from 'react'
import PostLists from './features/posts/PostLists'
import AddPostForm from './features/posts/AddPostForm'
import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import SinglePostPage from './features/posts/SinglePostPage'
import EditPostForm from './features/posts/EditPostForm'
import UserLists from './features/users/UserLists'
import UserPage from './features/users/UserPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<PostLists />} />

        <Route path='post'>
          <Route index element={<AddPostForm />} />
          <Route path=':postId' element={<SinglePostPage />} />
          <Route path='edit/:postId' element={<EditPostForm />} />
        </Route>

        <Route path="user">
          <Route index element={<UserLists />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>

        {/* Route Guard => Catch all = replace with 404 component if you want */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
