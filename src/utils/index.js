export const isValidEmail = email => {
  const pattern = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
  return pattern.test(email);
};

export const addToLocalStore = (itemName, valueToAdd) => {
  if (window.localStorage) {
    localStorage.setItem(itemName, JSON.stringify(valueToAdd));
    return true;
  }
  return false;
};

export const getFromLocalStore = itemName => {
  if (window.localStorage) {
    const value = localStorage.getItem(itemName);
    return JSON.parse(value);
  }
  return false;
};

export const removeFromLocalStore = itemName => {
  if (window.localStorage) {
    localStorage.removeItem(itemName);
    return true;
  }
  return false;
};
