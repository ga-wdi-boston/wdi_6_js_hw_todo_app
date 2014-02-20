describe("TodoApp", function(){
  describe(".makeTodoItem()", function() {
    var buyCheese,
        fakeField;

    beforeEach(function() {
      buyCheese = TodoApp.makeTodoItem("Buy cheese");
    });

    it("should return a TodoItem with a task", function() {
      expect(buyCheese.__proto__).toEqual(TodoItem.prototype);
    });
    it("should store each unfinished TodoItem in a unfinishedItems property array", function() {
      expect(TodoApp.unfinishedItems).toContain(buyCheese);
    });
  });

  describe(".getUserInput()", function() {
    beforeEach(function() {
      fakeField = {value: "Buy mangos"};
      spyOn(document, "getElementById").and.returnValue(fakeField);
    });

    it("should return the value of the task field", function() {
      expect(TodoApp.getUserInput()).toEqual("Buy mangos");
    });
  });

  describe(".onSubmitNew()", function() {
    beforeEach(function() {
      fakeField = {value: "Buy mangos"};
      spyOn(document, "getElementById").and.returnValue(fakeField);
      spyOn(TodoApp, "getUserInput").and.callThrough();
      spyOn(TodoApp, "makeTodoItem").and.callThrough();
    });

    it("should call .getUserInput() and .makeTodoItem()", function() {
      TodoApp.onSubmitNew();

      expect(TodoApp.getUserInput).toHaveBeenCalled();
      expect(TodoApp.makeTodoItem).toHaveBeenCalledWith("Buy mangos");
    });
    it("should create a new TodoItem in the unfinishtedItems array", function()
    {
      TodoApp.unfinishedItems = [];
      TodoApp.onSubmitNew();

      expect(TodoApp.unfinishedItems[0].task).toEqual("Buy mangos");
    });
  });
});
