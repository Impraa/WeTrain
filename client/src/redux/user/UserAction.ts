import { User } from "../../../../types/User";
import { createAction } from "../GenericAction";
import { UserActionType } from "./UserTypes";

export const setCurrentUser = (user: User) => {
  return createAction(UserActionType.SET_CURRENT_USER, user);
};
