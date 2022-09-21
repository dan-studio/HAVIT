import { createSlice } from "@reduxjs/toolkit";

const initial = {
    // 헤더 보여줄지 여부
    showHeader: true,
};

export const layoutSlice = createSlice({
    name: "layout",
    initialState: { ...initial },
    reducers: {
        setLayout: (state, action) => {
            state = { ...state, ...action.payload };
            return state;
        },
        resetLayout: (state) => {
            state = initial;
            return state;
        },
    },
});

export const { setLayout, resetLayout } = layoutSlice.actions;

export default layoutSlice;
