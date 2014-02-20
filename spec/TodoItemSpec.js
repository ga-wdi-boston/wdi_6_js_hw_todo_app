describe('TodoItem', function() {
  it("contains a string that describes the to do item", function() {
    var item_1 = new TodoItem('Update resume');
    expect(item_1.body).toEqual('Update resume');
  });
});
