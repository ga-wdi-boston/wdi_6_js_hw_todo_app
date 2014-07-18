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
    newListItem.addClass("single-item");

    newListItemDiv.text(this.item);

    var dateContainer = $('<div>');
    dateContainer.addClass("date");

    if(this.finished === false) {
      newListItemDiv.append(this.createButtons());
      dateContainer.text("Added on " + this.createdAt.getMonth() + "/" + this.createdAt.getDate() + "/" + this.createdAt.getFullYear());
    } else {
      dateContainer.text("Finished on " + (this.finishedAt.getMonth() + 1) + "/" + this.finishedAt.getDate() + "/" + this.finishedAt.getFullYear());
    }

    newListItem.append(newListItemDiv);
    newListItem.append(dateContainer);

    return newListItem;
  }

};

