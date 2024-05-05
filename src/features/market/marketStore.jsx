import { createSlice } from '@reduxjs/toolkit';

export const marketCart = createSlice({
    name: 'marketCart',
    initialState: {
        value: [],
    },
    reducers: {
        addItemToCart: (state, action) => {
            state.value = [...state.value, action.payload]
        }
    }
})

export const { addItemToCart, } = marketCart.actions;

export default marketCart.reducer;