import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, title: 'Firt Post', content: 'Hello!' },
    { id: 2, title: 'Second Post', content: 'More Text!' },
];

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
                        title,
                        content,
                        user: userId,
                    }
                }
            }
        },
        // postAdded(state, action) {
        //     state.push(action.payload);
        // },
        postUpdated(state, action) {
            console.error(action)
            const { id, title, content } = action.payload;
            const existingPost = state.find(post => post.id === id);
            if(existingPost) {
                // console.error("aqui!!!")
                existingPost.title = title;
                existingPost.content = content;
                console.warn(action.payload, 'existingPost') 
            }
        }
    }
});

export const { postAdded, postUpdated } = postsSlice.actions;

export default postsSlice.reducer;