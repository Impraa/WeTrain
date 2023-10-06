import { RootState } from "../store";

export const selectCurrentUser = (state: RootState) => state.user!.user;

export const selectUserIsLoading = (state: RootState) => state.user!.isLoading;

export const selectUserError = (state: RootState) => state.user!.error;

export const selectFoundUser = (state: RootState) => state.user!.foundUser;

export const selectFoundUserIsLoading = (state: RootState) =>
  state.user!.foundUserIsLoading;

export const selectFoundUserError = (state: RootState) =>
  state.user!.foundUserError;

export const selectNewPasswordIsLoading = (state: RootState) =>
  state.user!.newPasswordIsLoading;

export const selectNewPasswordError = (state: RootState) =>
  state.user!.newPasswordError;
