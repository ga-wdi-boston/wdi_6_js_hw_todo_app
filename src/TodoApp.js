window.onload = function() {
  var list = document.getElementById('unfinished'),
  finished_list = document.getElementById('finished');
  button = document.getElementById('add-item');
  button.onclick = function(event) {
    event.preventDefault();
    var todo = new TodoItem(document.getElementById('new-task-field').value);
    TodoApp.add_to_list(list, todo);
    return false;
  };
};

var TodoApp = {

};

TodoApp.add_to_list = function(list, todo) {
  var new_item = todo.render();
  if (new_item.innerHTML !== "") {
    list.appendChild(new_item);
  };
  return true;
};
