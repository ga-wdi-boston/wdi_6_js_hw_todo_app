var TodoApp = {
  initialize: function() {
    $('form').submit(this.addTask);
  },
  addTask: function(event) {
    var submission = $('#new-task-text').val();
    var newTask = new TodoItem(submission);

    if(newTask !== '') {
      $('table').append(newTask.html());
      $('#new-task-text').val('');
    }

    event.preventDefault();
  }
};
