
var TodoItem = function(text, isfinished){
  this.text = text;
  this.isfinished = false;
};

TodoItem.prototype.delete_button = function() {
  var delete_todo_button = document.getElementById('delete-button');

  delete_todo_button.onclick = function(event) {
    event.preventDefault();
    this.parentNode.remove();
  };
  return delete_todo_button;
};

TodoItem.prototype.finished_button = function() {
  var finished_todo_button = document.getElementById('finished-button'),
      finished_list = document.getElementById('finished'),
      unfinished_list = document.getElementById('unfinished');

  finished_todo_button.onclick = function(event) {
    event.preventDefault();
    this.parentNode.isfinished = true;
    finished_list.appendChild(this.parentNode);
    unfinished_list.removeChild(this.parentNode);
  };
  return finished_todo_button;
};
