var TodoApp = {

  todoArray: [],

  addNewItem: function(event){
    var newTodo = new TodoItem($('#thingToDo').val());
    if(newTodo.name !== ''){
      TodoApp.todoArray.unshift(newTodo);
      var newListItem = $('<li>').text(TodoApp.todoArray[0].name);
      $('.todo-list').append(newListItem);
      $('#thingToDo').val('');
    }
    event.preventDefault();
  },

  deleteItem: function(event){

    event.preventDefault();
  }
};
