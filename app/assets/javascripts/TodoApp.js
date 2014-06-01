var TodoApp = {

  todos: [],

  addNewItem: function(event){
    var itemInput = $('#todo-field').val();
    if (itemInput === '') {
      $('.error-message').text( "Can't submit an empty field!" ).show().fadeOut( 2000 );
    } else {
      var newTodo = new TodoItem(itemInput);
      TodoApp.todos.push(newTodo);
      TodoApp.updateLists();
      $('#todo-field').val('');
    }
    event.preventDefault();
  },

  deleteItem: function(event){
    var targetId = parseInt($(event.target).attr('id'));
    for(var i = 0; i < TodoApp.todos.length; i++) {
      if(TodoApp.todos[i].id === targetId) {
        TodoApp.todos.splice(i, 1);
      }
    }
    TodoApp.updateLists();
  },

  updateLists: function(){
    $('#todo-list-pending, #todo-list-completed').empty();
    TodoApp.todos.forEach(function(todo){$('#todo-list-pending').append(todo.display());        });
  },

// when collection changes, it automatically updates the view.
// DATA BINDING (bind your view to your model)


  // displayItems: function(itemsList) {
  //   for(var i = 0; i < itemsList.length; i++) {
  //     itemsList[i].itemName;
  //   }
  // }

  // findTodo: function(targetId){
  //   return $.grep(this.todos, function(todo){ return todo.id === targetId; })[0];
  // }


};
