const INITIAL_STATE = {
  login: false,
  register: false
};

const userauthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CLICKED_LOGIN":
      return {
        login: true,
        register: false
      };

    case "CLICKED_REGISTER":
      return {
        login: false,
        register: true
      };

    default:
      return state;
  }
};

export default userauthReducer;
