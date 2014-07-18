var TodoApp = {
  tasks: [],

  initialize: function() {
    $('form').submit($.proxy(this.addTask, this));
    $('table').on('click', 'a[title="Complete"]', $.proxy(this.completeTask, this));
    $('table').on('click', 'a[title="Delete"]', $.proxy(this.deleteTask, this));
    $('dd a').click($.proxy(this.sortTasks, this));
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
    // Get sortBy attribute and data-list info
    var sortBy = $(event.target).data('sort');
    var dataList = $(event.target).closest('div').data('list');

    // Find tasks that need to be sorted
    var tasksToSort = [];
    var otherTasks = [];
    if(dataList === "active") {
      tasksToSort = this.tasks.filter(function(task){
        return task.completedAt === null;
      });
      otherTasks = this.tasks.filter(function(task){
        return task.completedAt !== null;
      });
    } else if(dataList === "completed") {
      tasksToSort = this.tasks.filter(function(task){
        return task.completedAt !== null;
      });
      otherTasks = this.tasks.filter(function(task){
        return task.completedAt === null;
      });
    }

    // Map to sort by attribute
    var attributes = tasksToSort.map(function(task){
      return task[sortBy];
    });

    // Sort attributes
    var sortedAttributes = attributes.sort();

    // Sort tasks based off attribute sorting
    var sortedTasks = new Array(sortedAttributes.length);

    this.tasks.forEach(function(task){
      newIndex = sortedAttributes.indexOf(task[sortBy]);
      sortedTasks[newIndex] = task;
    });

    if(otherTasks.length > 0) {
      sortedTasks.concat(otherTasks);
    }

    this.tasks = sortedTasks;

    this.regenerateLists();

    $(event.target).parent().toggleClass('active');
    event.preventDefault();
  },

  regenerateLists: function() {
    $('table').empty();
    this.tasks.forEach(function(task){
      if(task.completedAt !== null) {
        $('#completed-tasks').find('table').append(task.html());
      } else {
        $('#active-tasks').find('table').append(task.html());
      }
    });
  }
};
