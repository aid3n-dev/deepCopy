const deepCopy = (target) => {
  if (typeof target !== "object") {
    return target;
  }

  if (Array.isArray(target)) {
    const copy = [];

    for (let i = 0; i < target.length; i++) {
      copy[i] = deepCopy(target[i]);
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
