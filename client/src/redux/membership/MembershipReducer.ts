import { AnyAction } from "@reduxjs/toolkit";
import { MembershipActionType } from "./MembershipTypes";
import { MembershipInitalState } from "../../utils/Interfaces/redux/AttributeInterfaces";

const INITAL_STATE: MembershipInitalState = {
  expiryDate: null,
  isLoading: false,
  error: null,
};

const membershipReducer = (state = INITAL_STATE, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case MembershipActionType.START_MEMBERSHIP_SET:
      return { ...state, isLoading: true };

    case MembershipActionType.ERROR_MEMBERSHIP_SET:
      return { ...state, error: payload };

    case MembershipActionType.SUCCESS_MEMBERSHIP_SET:
      return { ...state, expiryDate: new Date(payload) };

    default:
      return state;
  }
};

export default membershipReducer;
