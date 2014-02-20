describe("TodoItem", function(){
  var buyCheese,
      fakeTime;

  describe(".TodoItem()", function() {
    beforeEach(function() {
      buyCheese = new TodoItem("Buy cheese");
    });

    it("should create a TodoItem based on task argument", function() {
      expect(buyCheese.task).toEqual("Buy cheese");
      expect(buyCheese.__proto__).toEqual(TodoItem.prototype);
    });
    it("should assign a createdAt date based on the current time", function() {
      // This will not always work but had trouble with spyOn(window, "Date")
      // not actually stubbing
      expect(buyCheese.createdAt).toEqual(new Date());
    });
  });
});
