var TodoApp = {
  tasks: [],

  initialize: function() {
    $('form').submit($.proxy(this.addTask, this));
    $('table').on('click', 'a[title="Complete"]', $.proxy(this.completeTask, this));
    $('table').on('click', 'a[title="Delete"]', $.proxy(this.deleteTask, this));
  },

  addTask: function(event) {
    var submission = $('#new-task-text').val();
    try {
      var newTask = new TodoItem(submission);
      this.tasks.push(newTask);
      this.regenerateLists();
      $('#new-task-text').val('');
    } catch(error) {
      throw error;
    }

    event.preventDefault();
  },

  completeTask: function(event) {
    var currentTask = this.getTask();
    currentTask.markCompleted();
    this.regenerateLists();

    event.preventDefault();
  },

  deleteTask: function(event) {
    var currentTask = this.getTask();
    this.tasks = this.tasks.filter(function(task) {
      return task !== currentTask;
    });
    this.regenerateLists();

    event.preventDefault();
  },

  getTask: function() {
    return this.tasks.filter(function(task){
      return task.id === $(event.target).closest('tr').data('id');
    })[0];
  },

  regenerateLists: function() {
    $('table').empty();
    this.tasks.forEach(function(task){
      if(task.completedAt !== null) {
        $('[data-list="completed"]').find('table').append(task.html());
      } else {
        $('[data-list="active"]').find('table').append(task.html());
      }
    });
  }
};
