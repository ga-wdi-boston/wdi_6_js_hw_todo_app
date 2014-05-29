// This should handle inserting, relocating, and deleting elements from the
// DOM, and store an array of current `TodoItem` objects.

var TodoApp = {
  unfinishedTasks: [],
  completedTasks: [],

  addNewTask: function(event){
    event.preventDefault();
    var newTaskTitle = $('#task-field').val();
    if(newTaskTitle !== ''){
      TodoApp.unfinishedTasks.push(newTask);
      var newTask = new TodoItem(newTaskTitle);

      // Trying to create the wrapper and the new ul here
      var newItem = $('<ul>','<li>').text(newTaskTitle);
      $('#unfinished').append(newItem);
    }
  },

  completeTask: function(){

  },

  deleteTask: function(){

  }
};


// TodoApp.unfinishedTasks[i].createdAt.toLocaleString()
