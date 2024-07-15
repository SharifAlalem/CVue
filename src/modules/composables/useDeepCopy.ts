const toString = Object.prototype.toString;
const deepCopy = (obj: any) => {
  let rv;

  switch (typeof obj) {
    case "object":
      if (obj === null) {
        rv = null;
      } else {
        switch (toString.call(obj)) {
          case "[object Array]":
            rv = obj.map(deepCopy);
            break;
          case "[object Date]":
            rv = new Date(obj);
            break;
          case "[object RegExp]":
            rv = new RegExp(obj);
            break;
          default:
            rv = Object.keys(obj).reduce(function (prev: any, key) {
              prev[key] = deepCopy(obj[key]);
              return prev;
            }, {});
            break;
        }
      }
      break;
    default:
      rv = obj;
      break;
  }
  return rv;
};

export default deepCopy;
