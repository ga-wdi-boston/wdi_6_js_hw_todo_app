var TodoApp = {

  todoArray: [],

  addNewItem: function(event){
    var newTodo = new TodoItem($('#thingToDo').val());
    if(newTodo.name !== ''){
      TodoApp.todoArray.unshift(newTodo);

      var newListItem = ($('<li>').text(TodoApp.todoArray[0].name));
      var listItemClass = TodoApp.todoArray[0].name;
      var deleteButton = (' <button type="button" class="btn btn-danger btn-xs">Delete</button>');
      var completeButton = (' <button type="button" class="btn btn-success btn-xs">Completed</button>');
      newListItem.addClass(listItemClass);
      $('.todo-list').append((newListItem).append(completeButton, deleteButton));
      $('#thingToDo').val('');
    }
    event.preventDefault();
  },

  deleteItem: function(event){
    var btnClass = TodoApp.todoArray[0].name;
    // var itemToDelete = ($('.todo-list'));
    debugger;
    event.preventDefault();
  }
};
