const equalArray = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }

  const as = new Set(arr1);
  const bs = new Set(arr2);

  if (as.size !== bs.size) {
    return false;
  }

  for (var a of as) {
    if (!bs.has(a)) {
      return false;
    }
  }

  return true;
};

module.exports = { equalArray };
