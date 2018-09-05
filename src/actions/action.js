// @flow

import type {
  User,
  AddUserAction,
  ShowUsersAction,
  SaveUsersAction
} from "./types";

export const AddUser = (user: ?User): AddUserAction => {
  const listofUsers =
    JSON.parse(global.localStorage.getItem("usersList")) || {};
  listofUsers.push(user);
  return {
    type: "ADD_USER",
    payload: listofUsers
  };
};

export const ShowUsers = (): ShowUsersAction => {
  const listofUsers =
    JSON.parse(global.localStorage.getItem("usersList")) || {};
  return {
    type: "SHOW_USERS",
    payload: listofUsers
  };
};

export const SaveUsers = (list: Array<User>): SaveUsersAction => {
  return {
    type: "SAVE_USERS",
    payload: list
  };
};
