module.exports = function generate(isEven) {
  var i
  if(isEven)
    i = 0
  else
    i = -1

  var myIterator = {
    next: function(swap) {
      if(swap) i++
      else i += 2
      return {value: i}
    }
  }
  return myIterator
} 
