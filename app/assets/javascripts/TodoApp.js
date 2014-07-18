var TodoApp = {
  tasks: [],

  initialize: function() {
    $('form').submit($.proxy(this.addTask, this));
    $('table').on('click', 'a[title="Complete"]', $.proxy(this.completeTask, this));
    $('table').on('click', 'a[title="Delete"]', $.proxy(this.deleteTask, this));
    $('a[data-sort="task"]').click($.proxy(this.sortTasks, this));
    $('a[data-sort="timestamps"]').click($.proxy(this.sortTasks, this));
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

  sortTasks: function(event) {
    // Map to sortBy attribute
    var sortBy = $(event.target).data('sort');
    var attributes = this.tasks.map(function(task){
      return task[sortBy];
    });

    // Sort attributes
    var sortedAttributes = attributes.sort();

    // Sort tasks based off attribute sorting
    sortedTasks = new Array(this.tasks.length);
    this.tasks.forEach(function(task){
      newIndex = sortedAttributes.indexOf(task[sortBy]);
      sortedTasks[newIndex] = task;
    });
    this.tasks = sortedTasks;
    this.regenerateLists();

    $(event.target).parent().toggleClass('active');
    event.preventDefault();
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
