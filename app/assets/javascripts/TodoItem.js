var TodoItem = function(task){
  this.task = task;
};

TodoItem.prototype = {
  html: function() {
    return $('<tr>').text(this.task);
  }
};
