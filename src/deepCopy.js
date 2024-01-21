const deepCopy = (target) => {
  if (typeof target !== "object") {
    return target;
  }

  if (target instanceof Date) {
    return new Date(target.getTime());
  }

  if (target instanceof RegExp) {
    return new RegExp(target);
  }

  if (Array.isArray(target)) {
    const copy = [];

    for (let i = 0; i < target.length; i++) {
      copy[i] = deepCopy(target[i]);
    }

    return copy;
  }

  if (target instanceof Map) {
    const copy = new Map();
    for (let [key, value] of target) {
      copy.set(key, deepCopy(value));
    }

    return copy;
  }

  if (target instanceof Set) {
    const copy = new Set();

    for (let value of target) {
      copy.add(deepCopy(value));
    }

    return copy;
  }

  if (target instanceof Object) {
    const copy = {};

    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        copy[key] = deepCopy(target[key]);
      }
    }

    return copy;
  }

  return target;
};

module.exports = deepCopy;
