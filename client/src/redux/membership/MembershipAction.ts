import { createAction } from "../GenericAction";
import { MembershipActionType } from "./MembershipTypes";

export const setMembershipStart = () => {
  return createAction(MembershipActionType.START_MEMBERSHIP_SET);
};

export const setMembershipError = (error: string) => {
  return createAction(MembershipActionType.ERROR_MEMBERSHIP_SET, error);
};

export const setMembershipSuccess = (expiryDate: Date) => {
  return createAction(MembershipActionType.SUCCESS_MEMBERSHIP_SET, expiryDate);
};
