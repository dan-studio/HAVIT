import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import layoutReducer from './layout';
import notificationReducer from './notification';
import tagReducer from './tags'

const store = configureStore({
  reducer: {
    auth: authReducer,
    layout: layoutReducer,
    notification: notificationReducer,
    tag: tagReducer
  },
});

export default store;
