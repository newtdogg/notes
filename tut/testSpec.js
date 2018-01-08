describe("Can compare",[
  expect(1).toEqual(1),
  dont(expect(1).toEqual(2)),
  expect(1).toEqual(2),
  dont(expect(1).toEqual(1))
]);