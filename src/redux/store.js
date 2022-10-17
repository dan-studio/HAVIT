import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import layoutReducer from './layout';
import notiReducer from './notification';

const store = configureStore({
  reducer: {
    auth: authReducer,
    layout: layoutReducer,
    noti: notiReducer,
  },
});

export default store;
