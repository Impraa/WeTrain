import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import thunk from "redux-thunk";
import { userReducer } from "./user/UserReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, thunk),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
