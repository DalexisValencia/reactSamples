import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns'

const reactions = {
    thumbsUp: 0,
    hooray: 0,
    heart: 0,
    rocket: 0,
    eyes: 0
}

const initialState = [
    {
        id: 1,
        title: 'Firt Post',
        content: 'Hello!',
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions,
    },
    {
        id: 2,
        title: 'Second Post',
        content: 'More Text!',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        reactions
    },
];

console.info(initialState, 'initialState');

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        title,
                        content,
                        user: userId,
                        reactions
                    }
                }
            }
        },
        postUpdated(state, action) {
            console.error(action)
            const { id, title, content } = action.payload;
            const existingPost = state.find(post => post.id === id);
            if (existingPost) {
                existingPost.title = title;
                existingPost.content = content;
            }
        },
        reactionAdded (state, action) {
            const { postId, reaction } = action.payload;
            const existingPost = state.find(post => post.id === postId);
            
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
});

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;