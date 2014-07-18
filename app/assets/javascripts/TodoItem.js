var TodoItem = function(name){
  this.name = name;
  this.createdAt = new Date().getTime();
};

TodoItem.prototype = {
  toHtml: function() {
    if (this.name.length > 0) {
      return $('<li>').text(this.name).addClass('unfinished-item').append(this.completeButton()).append(this.deleteButton());
    }
  },
  completeButton: function() {
    return $('<a>').text('complete').addClass('btn btn-default complete-btn');
  },
  deleteButton: function() {
    return $('<a>').text('delete').addClass('btn btn-default delete-btn');
  }
};
