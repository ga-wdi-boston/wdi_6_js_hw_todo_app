var TodoApp = {

  todos: [],

  addNewItem: function(event){
    var itemInput = $('#todo-field').val();
    if (itemInput === '') {
      $('.error-message').text( "Can't submit an empty field!" ).show().fadeOut( 2000 );
    } else {
      var newTodo = new TodoItem(itemInput);
      TodoApp.todos.push(newTodo);
      debugger;
      TodoApp.updateLists();
      //$('#todo-list-pending').append(newTodo.display());

      $('#todo-field').val('');
    }
    event.preventDefault();
  },

  deleteItem: function(thisItem){
    for(var i = 0; i < TodoApp.todos.length; i++) {
      while(TodoApp.todos[i].itemName === thisItem) {
        TodoApp.todos.splice(i, 1);
      }
    }
  },

  updateLists: function(){
    $('#todo-list-pending, #todo-list-completed').empty();
    TodoApp.todos.forEach(function(todoObject){$('#todo-list-pending').append(todoObject.display());        });
  }

// when collection changes, it automatically updates the view.
// DATA BINDING (bind your view to your model)


  // displayItems: function(itemsList) {
  //   for(var i = 0; i < itemsList.length; i++) {
  //     itemsList[i].itemName;
  //   }
  // }


};
