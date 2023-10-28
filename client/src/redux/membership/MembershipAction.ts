import { Dispatch } from "@reduxjs/toolkit";
import { createAction } from "../GenericAction";
import { MembershipActionType } from "./MembershipTypes";
import { getSingleMembership } from "../../services/Memership";

export const setMembershipStart = () => {
  return createAction(MembershipActionType.START_MEMBERSHIP_SET);
};

export const setMembershipError = (error: string) => {
  return createAction(MembershipActionType.ERROR_MEMBERSHIP_SET, error);
};

export const setMembershipSuccess = (expiryDate: Date) => {
  return createAction(MembershipActionType.SUCCESS_MEMBERSHIP_SET, expiryDate);
};

export const getSingleMembershipAsync = async (
  dispatch: Dispatch,
  id: string
) => {
  dispatch(setMembershipStart());

  try {
    const membership = await getSingleMembership(id);

    if (membership.status == 200) {
      return dispatch(setMembershipSuccess(membership.data));
    }

    dispatch(setMembershipError("User has no membership currently"));
  } catch (error) {
    dispatch(setMembershipError(error as string));
  }
};
