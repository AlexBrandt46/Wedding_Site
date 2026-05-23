export const isValidEmail = (email: string): boolean => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
};

export const isNotEmptyString = (str: string): boolean => {
  return str.trim() !== '';
};

export const isValidName = (name: string): boolean => {
  const nameRegex = /^[a-zA-Z\s'-]+$/;
  return isNotEmptyString(name) && nameRegex.test(name);
};
