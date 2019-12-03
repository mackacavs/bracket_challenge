describe("Bracket", function () {

  it("should return true with an input of '()'", function () {
    expect(bracket('()')).toEqual(true);
  });

  it("should return true with an input of '((()))'", function () {
    expect(bracket('((()))')).toEqual(true);
  });

  it("should return true with an input of '(()()())'", function () {
    expect(bracket('(()()())')).toEqual(true);
  });

  it("should return true with an input of '((())())'", function () {
    expect(bracket('((())())')).toEqual(true);
  });

  it("should return true with an input of '(((('", function () {
    expect(bracket('((((')).toEqual(false);
  });

  it("should return true with an input of ')('", function () {
    expect(bracket(')(')).toEqual(false);
  });

});
