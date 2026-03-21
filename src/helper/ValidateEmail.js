const regular_email = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

export const validateEmail = (email) => {
  return regular_email.test(email);
};
