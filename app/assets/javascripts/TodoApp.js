
var TodoApp = {
  itemsArray: [],

  addTodoItem: function(event){
    var passedItem = $('#todo-field').val();
    if(passedItem !== ''){
    var newTodoItem = new TodoItem(passedItem);
    TodoApp.itemsArray.unshift(newTodoItem);

    var newItem = $('<tr>');
    listItem = $('<td>').text(TodoApp.itemsArray[0].itemName);
    listItemCreated = $('<td>').text(TodoApp.itemsArray[0].created);
    listItemCompleted = $('<td>').text(TodoApp.itemsArray[0].completed);
    listDelete = $("<td><input type='button' value='Delete' id='todo_delete'>");
    listComplete = $("<td><input type='button' value='Complete' id='todo_complete'>");
    newItem.append(listItem, listItemCreated, listItemCompleted, listDelete, listComplete);
    $('#todo-table').append(newItem);
    $('#todo-field').val('');
    }
    event.preventDefault();
  }

};



