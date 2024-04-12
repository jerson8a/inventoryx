import { configureStore } from '@reduxjs/toolkit';
import isSignedReducer from './features/auth/authStore';

export default configureStore({
    reducer: {
        isSigned: isSignedReducer,
    },
})