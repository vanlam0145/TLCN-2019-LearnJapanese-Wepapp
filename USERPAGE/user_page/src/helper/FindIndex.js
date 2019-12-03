const findIndex = (array, id) => {
  var index = null;
  for (let i = 0; i < array.length; i++) {
    if (array[i]._id === id) {
      index = i;
    }
  }
  return index;
};

export default findIndex;
