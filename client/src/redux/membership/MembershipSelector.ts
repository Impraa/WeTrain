import { RootState } from "../store";

export const selectExpiryDate = (state: RootState) =>
  state.membership.expiryDate;

export const selectMembershipError = (state: RootState) =>
  state.membership.error;

export const selectMembershipIsLoading = (state: RootState) =>
  state.membership.isLoading;
