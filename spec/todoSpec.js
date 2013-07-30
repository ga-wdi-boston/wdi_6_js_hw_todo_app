describe("Object duplication", function() {
  it("should clone an object", function() {
    newTodo = Object.create(todoItem);
    expect(todoItem).toEqual(newTodo);
  });
});

describe("todoApp", function() {
  it("should have a clearAllTasksButton method that returns a button", function() {
    expect(todoApp.clearAllTasksButton().nodeName.toBe("BUTTON");
  });
});

describe("todoItem", function() {
  var task = Object.create(todoItem);
  task.setTaskName("Do laundry");

  it("should have a completedButton method that returns a button", function () {
    expect(todoItem.completedButton().nodeName).toBe("BUTTON");
  });

  it("should have a deleteButton method that returns a button", function() {
    expect(todoItem.deleteButton().nodeName).toBe("BUTTON");
  });
});

// var duplicator = function() {
// }

// duplicator.prototype = coffee
// new duplicator
// var coffee3 = new duplicator()
// var properChild = new duplicator()
// properChild.type = "light"



// var duplicator = function() {
//   this source = "Latin AMerican"
// }

