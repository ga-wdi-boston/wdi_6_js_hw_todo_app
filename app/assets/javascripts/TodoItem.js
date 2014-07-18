var TodoItem = function(name){
  this.name = name;
  this.createdAt = new Date().getTime();
  this.id = this.__proto__.itemId;
  this.__proto__.itemId += 1;
};

TodoItem.prototype = {
  itemId: 1,
  toHtml: function() {
    return $('<li>').text(this.name).addClass('unfinished-item').data('id', this.id).append(this.completeButton()).append(this.deleteButton());
  },
  completeButton: function() {
    return $('<a>').text('complete').addClass('btn btn-default complete-btn');
  },
  deleteButton: function() {
    return $('<a>').text('delete').addClass('btn btn-default delete-btn');
  }
};
