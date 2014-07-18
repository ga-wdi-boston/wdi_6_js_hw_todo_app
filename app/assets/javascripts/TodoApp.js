var TodoApp = {
  initialize: function(){
  //event listeners must be inside initialize function
  $('#new-task-form').submit(this.addTask);
  },

  addTask: function(event){
    var newTask = $('#new-task-text').val();
    var completeButton = $('<button>').text('Completed!').click(function()
      { alert('move placeholder'); });
    var deleteButton = $('<button>').text('Delete').click(function()
      { alert('delete placeholder'); });

    if (newTask.length > 0){
      var listItem = $('<li>').text(newTask).append(completeButton).append(deleteButton);
      $('#incomplete-tasks-list').append(listItem);
      $('#new-task-text').val('');
  }
  //often used with form submissions
  event.preventDefault();
  }
};
