import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import logger from "redux-logger";
import thunk from "redux-thunk";
import { userReducer } from "./user/UserReducer";
import { notificationReducer } from "./notification/NotificationReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user", "notification"],
};

const userPersistConfig = {
  key: "user",
  storage,
  blacklist: ["isLoading", "error", "foundUserIsLoading", "foundUserError"],
};

const notificationPersistConfig = {
  key: "notification",
  storage,
  whitelist: ["notifications", "notification"],
};

export const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  notification: persistReducer(notificationPersistConfig, notificationReducer),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, thunk),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
