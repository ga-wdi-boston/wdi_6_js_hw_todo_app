var TodoItem = function(name){
  this.name = name;
  this.createdAt = new Date();
  this.isFinished = false;
  this.id = this.__proto__.itemId;
  this.__proto__.itemId += 1;
};

TodoItem.prototype = {
  itemId: 1,
  toHtml: function() {
    return $('<tr>').addClass('unfinished-item').data('id', this.id).append($('<td>').text(this.name)).append(this.formattedDate(this.createdAt, 'created-at')).append(this.formattedDate(this.completedAt, 'completed-at')).append(this.completeButton()).append(this.deleteButton());
  },
  completeButton: function() {
    return $('<td>').append($('<a>')).text('complete').addClass('btn btn-default complete-btn');
  },
  deleteButton: function() {
    return $('<td>').append($('<a>')).text('delete').addClass('btn btn-default delete-btn');
  },
  formattedDate: function(date, className) {
    var dateNode = $('<td>').addClass(className);
    if (date !== undefined) {
      dateNode.text(date.toString().substring(0, 25));
    }
    else (dateNode).text('--');
    return dateNode;
  }
};
