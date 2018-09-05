// @flow

export type User = {
  id: string,
  name: string,
  surname: string,
  birthday: string,
  gender: string,
  student: string
};

export type AddUserAction = {
  type: "ADD_USER",
  payload?: Object
};

export type ShowUsersAction = {
  type: "SHOW_USERS",
  payload?: Object
};

export type SaveUsersAction = {
  type: "SAVE_USERS",
  payload: Array<User>
};

export type ErrorsType = {
  errorName: string,
  errorSurname: string
};
