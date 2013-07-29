describe ("Todo", function() {

  describe("todo clone method", function() {
     var todoClone = clone(todoItem);
    });

    it("should be able to create a clone for TodoItem", function() {
      expect(todoClone).toEqual(todoItem);
    });


});
