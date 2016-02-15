module.exports = function filterForNumbers(iterable) {
  var numeric = []
  for (var i of iterable)
    if (isNumeric(i)) numeric.push(i)
  return numeric
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
