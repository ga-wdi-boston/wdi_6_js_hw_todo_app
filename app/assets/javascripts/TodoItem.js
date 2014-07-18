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

  createButtons: function() {
    var buttonContainer = $('<div>');
    buttonContainer.addClass("buttons");

    var deleteButton = $('<span>');
    deleteButton.addClass("glyphicon glyphicon-trash delete-button");
    var finishButton = $('<span>');
    finishButton.addClass("glyphicon glyphicon-ok finish-button");

    buttonContainer.append(finishButton);
    buttonContainer.append(deleteButton);
    return buttonContainer;
  },

  createListElement: function() {
    var newListItem = $('<li>');
    var newListItemDiv = $('<div>');

    newListItemDiv.text(this.item);

    if(this.finished === false) {
      newListItemDiv.append(this.createButtons());
    }
    newListItem.append(newListItemDiv);

    return newListItem;
  }

};

