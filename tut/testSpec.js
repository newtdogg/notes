describe("Can compare",[
	it("passing tests",[
		expect(1).toEqual(1),
  		dont(expect(1).toEqual(2))
  	]),
  	it("failing tests",[
  		expect(1).toEqual(2),
  		dont(expect(1).toEqual(1))
  	])
]);