import { createSlice } from '@reduxjs/toolkit';

const iniatialValue = {name: "", age: 0, email: ""};

export const userSlice = createSlice({
    name: 'user',
    initialState: { value: iniatialValue },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = iniatialValue;
        }
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;