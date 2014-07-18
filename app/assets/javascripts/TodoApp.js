var TodoApp = {
  initialize: function(){
  //event listeners must be inside initialize function
  $('#new-task-form').submit(this.addTask);
  },

  addTask: function(event){
    var newTask = $('#new-task-text').val();

    if (newTask.length > 0){
      var listItem = $('<li>').text(newTask);
      $('#incomplete-tasks-list').append(listItem);
      $('#new-task-text').val('');
  }
  //often used with form submissions
  event.preventDefault();
  }
};
