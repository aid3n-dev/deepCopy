const copyStrategies = {
  Date: (target) => new Date(target.getTime()),
  RegExp: (target) => new RegExp(target),
  Array: (target) => target.map((item) => deepCopy(item)),
  Map: (target) =>
    new Map([...target].map(([key, value]) => [key, deepCopy(value)])),
  Set: (target) => new Set([...target].map((value) => deepCopy(value))),
  Object: (target) =>
    Object.keys(target).reduce((acc, key) => {
      acc[key] = deepCopy(target[key]);
      return acc;
    }, {}),
  default: (target) => target,
};

const deepCopy = (target) => {
  if (typeof target !== "object" || target === null) {
    return target;
  }

  const strategy =
    copyStrategies[target.constructor.name] || copyStrategies["default"];

  return strategy(target);
};

module.exports = deepCopy;
