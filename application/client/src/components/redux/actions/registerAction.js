export const validate = validate => {
  return {
    type: "REGISTER_VALIDATE",
    validate
  };
};

export const formNotFullfilled = () => {
  return {
    type: "FORM_NOT_FULLFILLED"
  };
};

export const registered = () => {
  return {
    type: "REGISTERED"
  };
};

export const userAlreadyExists = () => {
  return {
    type: "USER_ALREADY_EXISTS"
  };
};
