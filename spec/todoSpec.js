describe("todoItem objects", function() {
  // XXX
  // This doesn't seem right.
  var todoItem = {
    todo: "",
    completed: false,
    completeButton: function() {},
    deleteButton: function() {},
    render: function() {}
  };

  it("should create accurate duplicates", function() {
    newItem = clone(todoItem);
    expect(newItem).toEqual(todoItem);
  });

  describe("completedButton()", function() {

    it("should return a button", function() {
      expect(todoItem.completedButton().type).toEqual('button');
    });

  });

});

describe("todoApp", function() {
});