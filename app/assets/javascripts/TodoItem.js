var TodoItem = function(newTodo){
  this.text = newTodo;
  this.id = $.now();
  this.created = new Date();
  this.completed = false;
};

TodoItem.prototype = {
  display: function(todo){
    this.newRow = $('<tr id=' + this.id + '>');
    newTodoCell = $('<td>').text(this.text);
    newCreatedCell = $('<td>').text(this.created);
    newDeleteCell = $("<td><input type='button' value='Delete' class='delete'>");
    newCompleteCell = $("<td><input type='button' value='Complete' class='complete'>");
    this.newRow.append(newTodoCell, newCreatedCell, newDeleteCell, newCompleteCell);
    if(!this.completed){
      $('#incomplete-tasks').append(this.newRow);
    }
    else{
      $('#complete-tasks').append(this.newRow);
    }
  }
};
