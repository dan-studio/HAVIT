import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userApis } from '../apis/auth';

// initialState
export const notification = createAsyncThunk('notification/get', async () => {
  const data = await userApis.getNotification();
  const noti = data;
  return { noti };
});

export const notiSlice = createSlice({
  name: 'noti',
  initialState: {
    noti: [],
  },
  reducers: {
    setNoti: (state, action) => {
     return {
      ...state,
      noti: state.filter((noti, idx)=>idx!==action.payload)
     }
    },
    clearNoti: state => {
      state.noti = undefined;
    },

    setTimeout: (state, action) => {
      state.timeout = action.payload;
    },
  },
  extraReducers: {
    [notification.pending]:state=>{
      state.noti = true;
    },
    [notification.fulfilled]: (state, action) => {
      state.noti = action.payload.noti;
    },
    [notification.rejected]: state => {
      state.noti = null;
      state.error = '알림을 불러오는데 실패했습니다.';
    },
  },
});

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    noti: [],
  },
  reducer: {},
});

export const { setNoti, clearNoti } = notiSlice.actions;

export default notiSlice.reducer;
