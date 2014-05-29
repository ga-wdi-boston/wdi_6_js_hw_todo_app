var TodoApp = {
  newTodo: function(event){
    var newTodo = $('#todo-field').val();

    if(newTodo !== ''){
      var newRow = $('<tr>');
      var newTodoCell = $('<td>').text(newTodo);
      var newCreatedCell = $('<td>').text($.now());
      var newDeleteCell = $("<td><input type='button' value='Delete' id='delete'>");
      var newCompleteCell = $("<td><input type='button' value='Complete' id='complete'>");
      newRow.append(newTodoCell, newCreatedCell, newDeleteCell, newCompleteCell);
      $('#incomplete-tasks').append(newRow);
      $('#todo-field').val('');
    }
    event.preventDefault();
  },
  completeTodo: function(event){

  },
  deleteTodo: function(event){

  }
};
