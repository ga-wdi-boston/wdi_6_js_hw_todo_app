describe('TodoItem', function(){
  beforeEach(function(){
    item = new TodoItem("homework")
    item2 = new TodoItem("laundry")
  });

  describe("new", function(){
    it("has a property called content", function(){
      expect(item.content).toEqual("homework");
    });

    it("throws an error with 0 args", function(){
      expect(function(){
        new TodoItem();
      }).toThrowError("invalid");
    });

    it("adds items to TodoApp unfinishedTasks array", function(){
      expect(TodoApp.unfinishedTasks).toContain(item, item2);
    });
  });
});
