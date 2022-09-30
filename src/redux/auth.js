import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMe } from '@apis/auth/principal';

// initialState
export const me = createAsyncThunk('principal/get', async () => {
  const data = await getMe();
  const principal = data;
  return { principal };
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    principal: null,
  },
  reducers: {
    setPrincipal: (state, action) => {
      state.principal = action.payload.principal;
    },
    clearPrincipal: state => {
      state.principal = undefined;
    },

    setTimeout: (state, action) => {
      state.timeout = action.payload;
    },
  },
  extraReducers: {
    [me.fulfilled]: (state, action) => {
      state.principal = action.payload.principal;
      state.permission = action.payload.permission;
    },
    [me.rejected]: state => {
      state.principal = null;
      state.error = '내 정보를 불러오는데 실패했습니다.';
    },
  },
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    principal: [],
  },
  reducer: {},
});

export const { setPrincipal, clearPrincipal } = authSlice.actions;

export default authSlice;
