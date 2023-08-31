import { RootState } from "../store";

export const selectCurrentUser = (state: RootState) => state.user!.user;

export const selectUserIsLoading = (state: RootState) => state.user!.isLoading;

export const selectUserError = (state: RootState) => state.user!.error;
