import { createSlice } from '@reduxjs/toolkit';

export const marketCart = createSlice({
    name: 'marketCart',
    initialState: {
        value: [],
    },
    reducers: {
        addItemToCart: (state, action) => {
            state.value = [...state.value, action.payload]
        },
        removeItemFromCart: (state, action) => {
            state.value = state.value.filter((item) => {
                return item.itemId != action.payload.itemId
            })
        },
        updateItemQuantity: (state, action) => {
            state.value = state.value.filter((item) => {
                if (item.itemId == action.payload.itemId) {
                    item.quantity = action.payload.quantity 
                }
                return item;
            })
        }
    }
})

export const { addItemToCart, removeItemFromCart, updateItemQuantity, } = marketCart.actions;

export default marketCart.reducer;