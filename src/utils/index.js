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

export const isEmpty = obj => {
  if (obj instanceof Date) {
    return false;
  }
  // null and undefined are "empty"
  if (obj == null) {
    return true;
  }

  const isNumber = value =>
    Object.prototype.toString.call(value) === "[object Number]";
  const isNaN = value => isNumber(value) && value.toString() === "NaN";

  if (isNumber(obj)) {
    return isNaN(obj);
  }

  /** Assume if it has a length property with a non-zero value
   * that that property is correct.
   */
  if (obj.length > 0) {
    return false;
  }
  if (obj.length === 0) {
    return true;
  }

  /** If it isn't an object at this point
   * it is empty, but it can't be anything *but* empty
   * Is it empty?  Depends on your application.
   */
  if (typeof obj !== "object") {
    return true;
  }

  /**  Otherwise, does it have any properties of its own?
   * Note that this doesn't handle
   * toString and valueOf enumeration bugs in IE < 9
   */
  const keys = Object.keys(obj);
  for (let i = 0, key = keys[i]; i < keys.length; i += 1) {
    if (hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
};

export const path = (p, o) => {
  const reducerFunction = (xs, x) => {
    return xs && xs[x] ? xs[x] : null;
  };
  return p.reduce(reducerFunction, o);
};
