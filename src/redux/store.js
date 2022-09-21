import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import layoutReducer from "./layout";

const store = configureStore({
    reducer: {
        auth: authReducer.reducer,
        layout: layoutReducer.reducer,
    },
});

export default store;
