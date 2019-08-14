const INITIAL_STATE = {
  username: "",
  password: "",
  validated: false,
  isRegistered: false,
  USER_ALREADY_EXISTS: false,
  FORM_NOT_FULLFILLED: false,
  SPACE_IN_USERNAME: false
};

const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "REGISTER_VALIDATE":
      let {
        validated,
        isRegistered,
        USER_ALREADY_EXISTS,
        FORM_NOT_FULLFILLED,
        SPACE_IN_USERNAME
      } = action.validate;

      return {
        ...state,
        validated,
        isRegistered,
        USER_ALREADY_EXISTS,
        FORM_NOT_FULLFILLED,
        SPACE_IN_USERNAME
      };
    case "FORM_NOT_FULLFILLED":
      return {
        ...state,
        FORM_NOT_FULLFILLED: true
      };
    case "REGISTERED":
      return {
        ...state,
        isRegistered: true,
        validated: true
      };
    case "USER_ALREADY_EXISTS":
      return {
        ...state,
        USER_ALREADY_EXISTS: true,
        FORM_NOT_FULLFILLED: false
      };
    default:
      return state;
  }
};

export default registerReducer;
