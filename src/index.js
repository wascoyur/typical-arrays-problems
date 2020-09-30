
exports.min = function min (array) {
  // console.log('input:', array);
  let out = 0;
  if (typeof (array) === 'undefined' || array.length === 0) {
    return out;
  }
  out = array.sort((a, b) => a - b)[0];
  // console.log('out:', out);
  return out;
}

exports.max = function max (array) {
  let out = 0;
  if (typeof (array) === 'undefined' || array.length === 0) {
      return out;
  }
  out = array.sort((a, b) => b - a)[0];
  // console.log('out:', out);
  return out;
}

exports.avg = function avg (array) {
  let out  = 
  return 0;
}
