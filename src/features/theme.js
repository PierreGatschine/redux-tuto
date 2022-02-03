import { createSlice } from '@reduxjs/toolkit';

const iniatialValue = "";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: { value: iniatialValue },
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload;
        },
    },  
});

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;