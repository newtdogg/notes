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

Expect.prototype.toContain = function(parameter) {
  this.message = `to contain ${parameter}`
  this.result = this.parameter.includes(parameter)
  return this
}


Expect.prototype.formatResult = function () {
  if (!this.result) {
    document.getElementById('tests').innerHTML +=
      `<div class="test"><h5 style="color: red;">Expected ${this.parameter} ${this.message}</h5></div>`
  } else {
    document.getElementById('tests').innerHTML +=
      `<div class="test"><h5 style="color: green;">Test passed</h5></div>`
  }
}

describe = function (name, its) {
  document.getElementById('tests').innerHTML += `<div class="testTitle"><h3>${name}</h3></div>`;
  its.forEach(function (test) {
    test.run()
  })
  // document.getElementById('tests').innerHTML += ;

};

function Test(name, lines){
  this.name = name
  this.lines = lines
}

Test.prototype.run = function(){
  document.getElementById('tests').innerHTML += `<div id="tests" class="container-flex it-title"><h4>${this.name}</h4></div>`;
  this.lines.forEach(function(line){
    if (typeof (line) === 'object'){ line.formatResult()}
  })
}

it = function (name, lines) {
  return (new Test(name,lines))
};
