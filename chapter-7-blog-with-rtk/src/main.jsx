import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { extendedApiSlice } from './features/posts/postsSlice.js'
import { usersApiSlice } from './features/users/usersSlice.js'

// we need to fetch all users and all posts from api when application start
store.dispatch(extendedApiSlice.endpoints.getPosts.initiate());
store.dispatch(usersApiSlice.endpoints.getUsers.initiate())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
)
