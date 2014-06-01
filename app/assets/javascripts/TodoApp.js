var TodoApp = {

  todos: [],

  addNewItem: function(event){
    var itemInput = $('#todo-field').val();


    if (itemInput === '') {
      $('.error-message').text( "Can't submit an empty field!" ).show().fadeOut( 1000 );
    } else {
      var newTodo = new TodoItem(itemInput);
      $('#todo-list-pending').append(newTodo.display());
      TodoApp.todos.push(newTodo);
      // debugger;



      // $(this).attr('id', 'value');
      // $('#todo-list').append(newItem);
      $('#todo-field').val('');
    }
    event.preventDefault();
  },

  deleteItem: function(thisItem){
    for(var i = 0; i < TodoApp.todoList.length; i++) {
      while(TodoApp.todoList[i].itemName === thisItem) {
        TodoApp.todoList.splice(i, 1);
      }
    }
  }

// when collection changes, it automatically updates the view.
// DATA BINDING (bind your view to your model)


  // displayItems: function(itemsList) {
  //   for(var i = 0; i < itemsList.length; i++) {
  //     itemsList[i].itemName;
  //   }
  // }


};
