//Global Store

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slice/index';


const store = configureStore({
    reducer: {
        todo: todoReducer
    }
});

export default store;

