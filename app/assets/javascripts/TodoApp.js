
var TodoApp = {
  itemsArray: [],

  addTodoItem: function(event){
    var passedItem = $('#todo-field').val();
    if(passedItem !== ''){
    var newTodoItem = new TodoItem(passedItem);
    var newItem = $('<tr>');
    var newTodoText = $('<td>').text(newTodoItem.itemName);
    var newTodoDeleted = $("<td><input type='button' value='Delete' id='todo_delete'>");
    var newTodoCompleted = $("<td><input type='button' value='Complete' id='todo_complete'>");
    newItem.append(newTodoText, newTodoDeleted, newTodoCompleted);
    $('#todo-table').append(newItem);
    $('#todo-field').val('');
    TodoApp.itemsArray.push(newTodoItem);
    }
    event.preventDefault();
  }

};



  //   var newTodo = $('#todo-field').val();

  //   if(newTodo !== ''){
  //     var newItem = $('<tr>');
  //     var newTodoText = $('<td>').text(newTodo);
  //     var newTodoDeleted = $("<td><input type='button' value='Delete' id='todo_delete'>");
  //     var newTodoCompleted = $("<td><input type='button' value='Complete' id='todo_complete'>");
  //     newItem.append(newTodoText, newTodoDeleted, newTodoCompleted);
  //     $('#todo-table').append(newItem);
  //     $('#todo-field').val('');
  //   }
  //   event.preventDefault();
  // }
