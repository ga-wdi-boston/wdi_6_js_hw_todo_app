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
    var dateCell = $('<td>').text(this.created);

      var completeButton = $('<button>').text('Completed!');
      var deleteButton = $('<button>').text('X');
    var buttonCell = $('<td>').append(completeButton).append(deleteButton);


    return row.append(itemNameCell).append(dateCell).append(buttonCell);
  }
};

