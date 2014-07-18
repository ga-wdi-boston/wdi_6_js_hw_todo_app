var TodoItem = function(task){
  this.id = TodoItem.generateId();
  this.task = task;
  this.completed = false;
};

TodoItem.nextId = 0;
TodoItem.generateId = function(){
  TodoItem.nextId += 1;
  return TodoItem.nextId;
};

TodoItem.prototype = {
  markCompleted: function() {
    this.completed = true;
    return this;
  },
  html: function() {
    // Completed table data
    var iconCompleted = $('<i>').addClass('fi-check');
    var linkCompleted = $('<a>').attr('href', '#').addClass('title', 'Complete').append(iconCompleted);
    var dataCompleted = $('<td>').append(linkCompleted);

    // Task table data
    var dataTask = $('<td>').text(this.task);

    // Task table row
    var tableRow = $('<tr>').append(dataCompleted);
    tableRow.append(dataTask);
    tableRow.data('id', this.id);
    return tableRow;
  }
};
