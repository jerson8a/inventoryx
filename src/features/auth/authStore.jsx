import { createSlice } from '@reduxjs/toolkit';

export const isSigned = createSlice({
    name: 'isSigned',
    initialState: {
        value: 0,
    },
    reducers: {
        setSigned: (state) => {
            state.value = 1
        },
        setLogout: (state) => {
            state.value = 0
        },
    }
})

export const { setSigned, setLogout } = isSigned.actions;

export default isSigned.reducer;