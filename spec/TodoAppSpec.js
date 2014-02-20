describe('TodoApp', function(){

  describe("Properties:", function () {

    it("an array called unfinishedTasks", function () {
      expect(TodoApp.unfinishedTasks instanceof Array).toEqual(true);
    });

    it("an array called finishedTasks", function () {
      expect(TodoApp.finishedTasks instanceof Array).toEqual(true);
    });
  });
});
