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
    {
        id: '3',
        title: 'This is a title',
        content: "This is a content of object 3."
    },
    {
        id: '4',
        title: 'This is a title',
        content: "This is a content of object 4."
    }
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    }
})

export const selectAllPosts = (state) => state.posts

export default postSlice.reducer