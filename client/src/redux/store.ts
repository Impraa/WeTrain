import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import logger from "redux-logger";
import thunk from "redux-thunk";
import { userReducer } from "./user/UserReducer";
import { notificationReducer } from "./notification/NotificationReducer";
import membershipReducer from "./membership/MembershipReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user", "notification", "membership"],
};

const userPersistConfig = {
  key: "user",
  storage,
  blacklist: ["isLoading", "error", "foundUserIsLoading", "foundUserError"],
};

const notificationPersistConfig = {
  key: "notification",
  storage,
  whitelist: ["notifications"],
};

const membershipPersistConfig = {
  key: "membership",
  storage,
  blacklist: ["error", "isLoading"],
};

export const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  notification: persistReducer(notificationPersistConfig, notificationReducer),
  membership: persistReducer(membershipPersistConfig, membershipReducer),
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
