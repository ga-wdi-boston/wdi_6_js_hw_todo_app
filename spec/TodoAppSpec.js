describe("TodoApp", function(){
  var buyCheese,
      fakeField,
      milk,
      watermelon;

  describe(".makeTodoItem()", function() {

    beforeEach(function() {
      buyCheese = TodoApp.makeTodoItem("Buy cheese");
    });

    it("should return a TodoItem with a task", function() {
      expect(buyCheese.__proto__).toEqual(TodoItem.prototype);
    });
    it("should store each unfinished TodoItem in a unfinishedItems property array", function() {
      expect(TodoApp.todoItems).toContain(buyCheese);
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
    it("should create a new TodoItem in the unfinishtedItems array",
    function() {
      TodoApp.todoItems = [];
      TodoApp.onSubmitNew();

      expect(TodoApp.todoItems[0].task).toEqual("Buy mangos");
    });
  });
  describe(".finishTodo()", function() {
    beforeEach(function() {
      TodoApp.todoItems = [];
      milk = TodoApp.makeTodoItem("Buy milk");
      watermelon = TodoApp.makeTodoItem("Buy watermelon");
    });

    it("should find a TodoItem by task and remove it from unfinishedItems",
    function() {
      TodoApp.finishTodo(milk);
      expect(TodoApp.finishedItems).toContain(milk);
      expect(TodoApp.unfinishedItems).not.toContain(milk);
      expect(TodoApp.unfinishedItems).toContain(watermelon);
    });

    it("should not remove a TodoItem if the task does not exist", function() {
      TodoApp.finishTodo("Punt kittens");
      expect(TodoApp.finishedItems).toEqual([]);
      expect(TodoApp.unfinishedItems).toContain(milk);
      expect(TodoApp.unfinishedItems).toContain(watermelon);
    });
  });
});
