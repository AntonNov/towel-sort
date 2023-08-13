module.exports = function towelSort(matrix) {
  if ((Array.isArray(matrix) && matrix.length === 0) || arguments.length == 0) {
    return []
  }
  let new_array = []
  for (let index = 0; index < matrix.length; index++) {
    if (index % 2 == 0) {
      new_array = new_array.concat(matrix[index])
    }
    else {
      new_array = new_array.concat(matrix[index].reverse())
    }
  }
  return new_array;
}
