export const validateStatus = validate => {
  return {
    type: "VALIDATE",
    validate
  };
};

// Re routes based on given route after logging in
export const reRouteAfterCompleteLogin = route => {
  return {
    type: "REDIRECT",
    route
  }
}