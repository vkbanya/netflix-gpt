export const validateEmailOrNumber = (value) => {
  const regx =/^(?:\d{10}|\w+@\w+\.\w{2,3})$/;
  return regx.test(value);
};
export const validatePassword = (value) => {
  const regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return regx.test(value);
};
