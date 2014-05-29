var TodoItem = {
  newTodo: function(event){
    var newTodo = $('#todo-field').val();
    var todo;

    if(newTodo !== ''){
      todo.text = newTodo;
      todo.created = $.now();
      todo.completed = false;
      debugger;
      TodoApp.todo_array.push(todo);
      TodoItem.displayTodo(todo);
      $('#todo-field').val('');
    }

    event.preventDefault();
  },

  completeTodo: function(){

  },

  deleteTodo: function(){

  },

  displayTodo: function(todo){
    var newRow = $('<tr>');
    var newTodoCell = $('<td>').text(todo.text);
    var newCreatedCell = $('<td>').text(todo.text);
    var newDeleteCell = $("<td><input type='button' value='Delete' id='delete'>");
    var newCompleteCell = $("<td><input type='button' value='Complete' id='complete'>");
    newRow.append(newTodoCell, newCreatedCell, newDeleteCell, newCompleteCell);
    $('#incomplete-tasks').append(newRow);
  }
};
