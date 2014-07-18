var TodoItem = function(task){
  if(task === "") {
    throw new error("Task is not defined");
  }
  this.id = TodoItem.generateId();
  this.task = task;
  this.completedAt = null;
  this.createdAt = new Date();
};

TodoItem.nextId = 0;
TodoItem.generateId = function(){
  TodoItem.nextId += 1;
  return TodoItem.nextId;
};

TodoItem.prototype = {
  markCompleted: function() {
    this.completedAt = new Date();
    return this;
  },

  formatDate: function(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if(seconds < 10){
      seconds = "0" + seconds;
    }
    var time = hours + ":" + minutes + ":" + seconds;
    return month + "/" + day + "/" + year + " " + time;
  },

  html: function() {
    // Completed table data
    var iconCompleted = $('<i>').addClass('fi-check');
    var linkCompleted = $('<a>').attr('href', '#').attr('title', 'Complete').append(iconCompleted);
    var dataCompleted = $('<td>').append(linkCompleted);

    // Task table data
    var dataTask = $('<td>').text(this.task);

    // Created at table data
    var dataTimestamp = "";
    if(this.completedAt === null) {
      dataTimestamp = $('<td>').text(this.formatDate(this.createdAt));
    } else {
      dataTimestamp = $('<td>').text(this.formatDate(this.completedAt));
    }

    // Delete table data
    var iconDelete = $('<i>').addClass('fi-trash');
    var linkDelete = $('<a>').attr('href', '#').attr('title', 'Delete').append(iconDelete);
    var dataDelete = $('<td>').append(linkDelete);

    // Task table row
    var tableRow = $('<tr>').append(dataCompleted);
    tableRow.append(dataTask);
    tableRow.append(dataTimestamp);
    tableRow.append(dataDelete);
    tableRow.data('id', this.id);
    return tableRow;
  }
};
