import { configureStore } from '@reduxjs/toolkit';
import isSignedReducer from './features/auth/authStore';
import marketCartReducer from './features/market/marketStore';

export default configureStore({
    reducer: {
        isSigned: isSignedReducer,
        marketCart: marketCartReducer,
    },
})