module.exports = function *multiplier() {
  var i = 0
  var x = 1

  while(true) {
    i++
    x = yield i*x
    if(!x) x = 1
  }
}
