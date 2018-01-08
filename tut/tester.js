function Expect(parameter){
  this.parameter = parameter
}

expect = function(parameter){
  return new Expect(parameter)
}

Expect.prototype.toEqual = function(parameter){
  return this.parameter === parameter
}
