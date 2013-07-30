describe("todoItem object", function() {

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

  describe("clearAll()", function() {

    todoApp.createTodo("Call Mom");
    todoApp.createTodo("Finish that paper");
    document.getElementsByClassName('completed-button')[0].click();
    // XXX
    // How to test part of an onclick function??
    // I want to clear completed tasks, too!
    it("should clear all tasks", function() {
      todoApp.clearAll();
      expect(document.getElementById('todo-items').innerHTML).toEqual(null);
      expect(document.getElementById('completed-items').innerHTML).toEqual(null);
    });

  });

});