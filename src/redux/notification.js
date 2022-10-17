import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userApis } from '../apis/auth';

// initialState
export const notification = createAsyncThunk('notification/get', async () => {
  const data = await userApis.getNotification();
  const notification = data;
  return { notification };
});

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    notification: [],
  },
  reducers: {
    setnotification: (state, action) => {
     return {
      ...state,
      notification: state.filter((notification, idx)=>idx!==action.payload)
     }
    },
    clearnotification: state => {
      state.notification = undefined;
    },

    setTimeout: (state, action) => {
      state.timeout = action.payload;
    },
  },
  extraReducers: {
    [notification.pending]:state=>{
      state.notification = true;
    },
    [notification.fulfilled]: (state, action) => {
      state.notification = action.payload.notification;
    },
    [notification.rejected]: state => {
      state.notification = null;
      state.error = '알림을 불러오는데 실패했습니다.';
    },
  },
});


export const { setnotification, clearnotification } = notificationSlice.actions;

export default notificationSlice.reducer;
