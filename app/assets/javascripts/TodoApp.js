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
      // debugger;

      // Trying to create the li and p here
      var newItem = $('<li>').attr('class', 'task').html([
        $('<p>').attr('class','title').text(newTaskTitle),
        $('<p>').attr('class','created-at').text('Created: ' + newTask.createdAt.toLocaleString()),
        $('<p>').attr('class','make-complete').html(
          $('<a>').attr('href', '#').text('Complete Task')
          )
        ]);

      $('#unfinished').append(newItem);
    }
  },

  completeTask: function(){

  },

  deleteTask: function(){

  }
};


// TodoApp.unfinishedTasks[i].createdAt.toLocaleString()
