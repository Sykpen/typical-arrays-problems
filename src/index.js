
exports.min = function min (array) {
  if (!array) {
    return 0;
}
return array.length ? Math.min.apply(this, array) : 0;
}

exports.max = function max (array) {
  if (!array) {
    return 0;
}
return array.length ? Math.max.apply(this, array) : 0;
}

exports.avg = function avg (array) {
  if (!array) {
    return 0;
}
    return array.length ? array.reduce((a, c) => a + c) / array.length : 0;
}
