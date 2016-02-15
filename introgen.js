module.exports = function *generate(isEven) {
  var i
  if(isEven)
    i = 0
  else
    i = -1

  while(true)
    yield i += 2
} 
