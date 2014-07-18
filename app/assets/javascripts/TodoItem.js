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
  }

};

