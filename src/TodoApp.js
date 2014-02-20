window.onload = function() {
  var list = document.getElementById('unfinished');
  TodoApp.store_unfinished();
  TodoApp.store_finished();
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
  list.appendChild(new_item);
  return false;
};

TodoApp.store_unfinished = function() {
  var unfinished_todos = document.getElementsByClassName('items');
};

TodoApp.store_finished = function() {
  var finished_todos = document.getElementById('finished').children;
};

// TodoApp.add_to_bad_list = function(list) {
//   var bad_li = document.createElement('li'),
//   bad_item_text = document.getElementById('new-bad-thing');
//   bad_li.innerHTML = bad_item_text.value;
//   bad_item_text.value = '';
//   list.appendChild(bad_li);
//   return false;
// };
