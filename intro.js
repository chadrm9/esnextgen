module.exports = function makeCounter(someObj) {
  
  var i = 0
  var done = false

  someObj.next = function() {
    if (i < 10)
      i++
    else
      done = true
    return {value: i, done: done}

  }
} 
