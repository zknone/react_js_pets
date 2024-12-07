import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
