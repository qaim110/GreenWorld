const INITIAL_STATE = {
  username: "",
  password: "",
  validated: false,
  LOOGEDIN: false,
  USER_NOT_FOUND: false,
  INCORRECT_USERNAME_OR_PASSWORD: false,
  // REDIRECT: false,
  ROUTE: "",
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "VALIDATE":
      let {
        validated,
        LOOGEDIN,
        USER_NOT_FOUND,
        INCORRECT_USERNAME_OR_PASSWORD
      } = action.validate;
      return {
        ...state,
        validated: validated,
        LOOGEDIN: LOOGEDIN,
        USER_NOT_FOUND: USER_NOT_FOUND,
        INCORRECT_USERNAME_OR_PASSWORD: INCORRECT_USERNAME_OR_PASSWORD
      };
    case "REDIRECT":
      let route = action.route
      return {
        ...state,
        // REDIRECT: true,
        ROUTE: route
      }
    default:
      return state;
  }
};

export default loginReducer;
