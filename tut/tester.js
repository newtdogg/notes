function Expect(parameter) {
  this.parameter = parameter
  this.result = false
  this.message = ""
}

expect = function (parameter) {
  return new Expect(parameter)
}

dont = function (test) {
  test.result = (!test.result) 
  test.message = "not " + test.message
  return test
}

Expect.prototype.toEqual = function (parameter) {
  this.message = `to equal ${parameter}`
  this.result = (this.parameter === parameter) 
  return this
}


Expect.prototype.formatResult = function() {
  if (!this.result) {
    document.getElementById('tests').innerHTML += 
    `<div>Expected ${this.parameter} ${this.message}</div>`
  } else {
    document.getElementById('tests').innerHTML += 
    `<div>Test passed</div>`
  }
}

describe = function(name, tests){
  console.log(name)
  tests.forEach(function(test) {
    test.formatResult()
 })
}
