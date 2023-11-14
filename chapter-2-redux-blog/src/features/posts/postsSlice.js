import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things."
    },
    {
        id: '2',
        title: 'Slices...',
        content: "The more I say slice, the more I want pizza."
    },
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const selectAllPosts = (state) => state.posts

export const { postAdded } = postSlice.actions  // Action creators for the types of actions that are handled by the slice reducer.

export default postSlice.reducer    // The slice's reducer.