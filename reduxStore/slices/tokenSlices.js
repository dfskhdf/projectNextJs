import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
};

export const tokenSlice = createSlice({
    name: 'tokens',
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.value = action.payload;
            console.log(action.payload);
        },
    },
})
  
export const { addToken } = tokenSlice.actions;
  
export default tokenSlice.reducer;