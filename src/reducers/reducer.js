const initalState = {
  users: []
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADD_USER": {
      localStorage.setItem("usersList", JSON.stringify(action.payload));
      const list = JSON.parse(localStorage.getItem("usersList"));
      const users = list ? list : [];
      return {
        users
      };
    }
    case "SHOW_USERS": {
      const list = JSON.parse(localStorage.getItem("usersList"));
      const users = list ? list : [];
      return {
        users
      };
    }
    case "SAVE_USERS": {
      localStorage.setItem("usersList", JSON.stringify(action.payload));
      const list = JSON.parse(localStorage.getItem("usersList"));
      const users = list ? list : [];
      return {
        users
      };
    }
    default:
      return state;
  }
};

export default reducer;
