import { Dispatch } from "@reduxjs/toolkit";
import { createAction } from "../GenericAction";
import { MembershipActionType } from "./MembershipTypes";
import {
  createUserMembership,
  getSingleMembership,
} from "../../services/Memership";

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
      return dispatch(setMembershipSuccess(membership.data.expiryDate));
    }

    dispatch(setMembershipError("User has no membership currently"));
  } catch (error) {
    dispatch(setMembershipError(error as string));
  }
};

export const createUserMembershipAsync = async (
  dispatch: Dispatch,
  userId: string
) => {
  dispatch(setMembershipStart());
  try {
    const membership = await createUserMembership(userId);
    if (membership.status == 200 || membership.status == 201) {
      return dispatch(setMembershipSuccess(membership.data.expiryDate));
    }

    dispatch(
      setMembershipError(
        "Occured an error while trying to set user's membership"
      )
    );
  } catch (error) {
    dispatch(setMembershipError(error as string));
  }
};
