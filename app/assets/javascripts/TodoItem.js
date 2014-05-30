var TodoItem = function(text){
  this.created_at = new Date();
  this.text = text;
};

TodoItem.prototype.listElement = function(){
  newElement = $('<li>').addClass('list-item');
  newElement.html(this.created_at + " | " + this.text + " | " + this.completeButton() + " | " + this.deleteButton());
  return newElement;
};

TodoItem.prototype.completeButton = function(){
    return '<a href="#" class="btn btn-small btn-default" id="complete-item-button">Complete</a>';
  };

TodoItem.prototype.deleteButton = function(){
    return '<a href="#" class="btn btn-small btn-default" id="delete-item-button">Delete</a>';
  };
