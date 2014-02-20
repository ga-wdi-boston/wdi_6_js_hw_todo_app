describe('TodoItem', function(){

	describe('initialize', function(){
		var todo = new TodoItem('Laundry');

		it('should assign the first parameter as text', function(){
			expect(todo.text).toEqual('Laundry')
		});
	});

});
