var TodoItem = function(text){
  this.created_at = new Date();
  this.text = text;
  this.completed = false;
  this.id = $.now();
};

TodoItem.prototype.listElement = function(){
  newElement = $('<li>').addClass('list-item').attr('id', this.id) ;
  newElement.html(this.created_at + " | " + this.text + " | ").append(this.completeButton()).append(this.deleteButton());
  return newElement;
};

TodoItem.prototype.completeButton = function(){
    var attributes = {'id':"complete-item-button", 'href':"#"};
    var newElement = $('<a>').addClass("btn btn-small btn-default").attr(attributes).text("Complete");
    return newElement;
  };

TodoItem.prototype.deleteButton = function(){
    var attributes = {'id':"delete-item-button", 'href':"#"};
    var newElement = $('<a>').addClass("btn btn-small btn-default").attr(attributes).text("Delete");
    return newElement;
  };
