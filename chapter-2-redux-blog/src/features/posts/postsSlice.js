import { createSlice, nanoid } from "@reduxjs/toolkit";

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
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content)   {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
            // If you need to customize the creation of the payload value of an action creator by means of a prepare callback, 
            // the value of the appropriate field of the reducers argument object should be an object instead of a function.
        }
    }
})

export const selectAllPosts = (state) => state.posts

export const { postAdded } = postSlice.actions  // Action creators for the types of actions that are handled by the slice reducer.

export default postSlice.reducer    // The slice's reducer.