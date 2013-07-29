describe ("Todo", function() {

  describe("todo clone method", function() {
  });

  it("should be able to create a clone for TodoItem", function() {
    var todoClone = clone(todoItem);
    expect(todoClone).toEqual(todoItem);
  });

  describe("todo add completed button method", function() {
  });

  it("should return a button with text COMPLETE", function() {
    var newItem = clone(todoItem);
    var output = newItem.completedButton();
    expect(output.innerText).toEqual("COMPLETE");
  });

  describe("todo add deleted button method", function() {
  });

  it("should return a button with Delete ", function() {
    var newItem = clone(todoItem);
    var output = newItem.deleteButton();
    expect(output.innerText).toEqual("Delete");
  });

});
