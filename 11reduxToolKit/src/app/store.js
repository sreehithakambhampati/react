import {configureStore} from '@reduxjs/toolkit';
// Since todoSlice.js has exported only one default item (todoSlice.reducer), the imported todoReducer will be an alias for todoSlice.reducer.
import todoReducer from '../features/todoSlice';
export const store = configureStore({
        reducer : todoReducer
})
