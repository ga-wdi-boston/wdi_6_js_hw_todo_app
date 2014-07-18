var TodoItem = function(item){
  this.item = item;
  this.finished = false;
  this.createdAt = new Date();
  TodoApp.currentItems.push(this);
};

TodoItem.prototype = {

  markAsDone: function() {
    this.removeItem();

    this.finished = true;
    this.finishedAt = new Date();

    TodoApp.finishedItems.push(this);
  },

  removeItem: function() {
    TodoApp.currentItems.splice(TodoApp.currentItems.indexOf(this), 1);
  },

  createListElement: function() {
    // this just makes a bunch of buttons
    var buttonContainer = $('<span>');
    buttonContainer.addClass("buttons");

    var deleteButton = $('<span>');
    deleteButton.addClass("glyphicon glyphicon-trash delete-button");
    var finishButton = $('<span>');
    finishButton.addClass("glyphicon glyphicon-ok finish-button");

    buttonContainer.append(finishButton);
    buttonContainer.append(deleteButton);

    var newListItem = $('<li>');
    newListItem.text(this.item);
    newListItem.append(buttonContainer);

    return newListItem;
  }

};

