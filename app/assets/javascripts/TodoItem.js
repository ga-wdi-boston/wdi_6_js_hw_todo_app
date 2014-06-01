var TodoItem = function(itemName){
  this.itemName = itemName;
  this.completed = false;
  this.created = new Date();
  this.id = TodoItem.generateId();
};

TodoItem.id = 0;
TodoItem.generateId = function(){
  TodoItem.id += 1;
  return TodoItem.id;
};

TodoItem.prototype = {

  display: function(){
    var row = $('<tr>').addClass(this.id);
    var itemNameCell = $('<td>').text(this.itemName);
    var dateCell = $('<td>').text(this.formatDate(this.created));
      var completeButton = $('<button>').text('Completed!').attr('id', this.id).attr('type', 'button').addClass('complete-todo');;
      var deleteButton = $('<button>').text('X').attr('id', this.id).attr('type', 'button').addClass('delete-todo');
    var buttonCell = $('<td>').append(completeButton).append(deleteButton);

    return row.append(itemNameCell).append(dateCell).append(buttonCell);
  },

  formatDate: function(date){
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    });
  }

};

