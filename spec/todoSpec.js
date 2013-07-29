describe ("Todo", function() {

  describe("todo clone method", function() {

    });

    it("should be able to create a clone for TodoItem", function() {
      var todoClone = clone(todoItem);
      expect(todoClone).toEqual(todoItem);
    });


});
