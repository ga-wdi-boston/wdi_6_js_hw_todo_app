describe("todoItem objects", function() {

  it("should create accurate duplicates", function() {
    newItem = clone(todoItem);
    expect(newItem).toEqual(todoItem);
  });

  describe("completedButton()", function() {

    it("should return a button", function() {
      // XXX
      // In IE it equals 'button', how do I set the test with an OR?
      expect(todoItem.completedButton().type).toEqual('submit');
    });

  });

  describe("deleteButton()", function() {

    it("should return a button", function() {
      // XXX
      // In IE it equals 'button', how do I set the test with an OR?
      expect(todoItem.deleteButton().type).toEqual('submit');
    });

  });

});

describe("todoApp", function() {
});