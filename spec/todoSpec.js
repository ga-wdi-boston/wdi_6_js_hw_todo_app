describe("Object duplication", function() {
  it("should clone an object", function() {
    newTodo = Object.create(todoItem);
    expect(todoItem).toEqual(newTodo);
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

