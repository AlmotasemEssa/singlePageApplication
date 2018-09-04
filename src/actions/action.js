export const AddUser = user => dispatch => {
  const listofUsers = JSON.parse(localStorage.getItem("usersList")) || [];
  listofUsers.push(user);
  dispatch({
    type: "ADD_USER",
    payload: listofUsers
  });
};

export const ShowUsers = () => dispatch => {
  const listofUsers = JSON.parse(localStorage.getItem("usersList")) || [];
  dispatch({
    type: "SHOW_USERS",
    payload: listofUsers
  });
};

export const SaveUsers = list => dispatch => {
  dispatch({
    type: "SAVE_USERS",
    payload: list
  });
};
