var TodoApp = {
  todoItems: [],
  initialize: function(){
  //event listeners must be inside initialize function
  $('#new-task-form').submit(this.addTask);
  },

  addTask: function(event){
    event.preventDefault();
    var newItem = new TodoItem();
    newItem.task = $('#new-task-text').val();
    $('#new-task-text').val('');
    TodoApp.todoItems.push(newItem);

    TodoApp.redrawLists();
  },

  redrawLists: function(){
    $('#incomplete-tasks-list').empty();
    $('#completed-tasks-list').empty();
    for(var i = 0; i < TodoApp.todoItems.length; i++) {
      var currentItem = TodoApp.todoItems[i];
      if(currentItem.deleted === false) {
        if(currentItem.completed === true) {
          $('#completed-tasks-list').append(currentItem.html());
        } else {
          $('#incomplete-tasks-list').append(currentItem.html());
        }
      }
    }
  }
};
