var TodoApp = {
  tasks: [],

  initialize: function() {
    $('form').submit($.proxy(this.addTask, this));
    $('table').on('click', 'a', $.proxy(this.completeTask, this));
  },

  addTask: function(event) {
    var submission = $('#new-task-text').val();
    var newTask = new TodoItem(submission);
    this.tasks.push(newTask);
    this.regenerateLists();
    $('#new-task-text').val('');

    event.preventDefault();
  },

  completeTask: function(event) {
    var currentTaskId = $(event.target).parents().find('tr').data('id');
    var currentTask = this.tasks.filter(function(task){
      return task.id === currentTaskId;
    })[0];
    currentTask.markCompleted();
    this.regenerateLists();

    event.preventDefault();
  },

  regenerateLists: function() {
    $('table').empty();
    this.tasks.forEach(function(task){
      if(task.completed) {
        $('[data-list="completed"]').find('table').append(task.html());
      } else {
        $('[data-list="active"]').find('table').append(task.html());
      }
    });
  }
};
