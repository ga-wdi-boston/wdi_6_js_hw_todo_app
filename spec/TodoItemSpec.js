describe('TodoItem', function(){
  var item, item2;
  beforeEach(function(){
    TodoApp.unfinishedTasks = [];
    TodoApp.finishedTasks = [];
    item = new TodoItem("homework");
    item2 = new TodoItem("laundry");
  });

  describe("new", function(){
    it("has a property called content", function(){
      expect(item.content).toEqual("homework");
    });

    it("throws an error with 0 args", function(){
      expect(function(){
        new TodoItem();
      }).toThrowError("Need to input something!");
    });

    it("adds items to TodoApp unfinishedTasks array", function(){
      expect(TodoApp.unfinishedTasks).toContain(item, item2);
    });

    describe("#complete", function(){
      it("moves item from unfinishedTasks to finishedTasks", function(){
        item.complete();
        expect(TodoApp.unfinishedTasks).not.toContain(item);
        expect(TodoApp.finishedTasks).toContain(item);
      });
    });
  });
});
