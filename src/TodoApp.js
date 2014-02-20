window.onload = function() {
  var list = document.getElementById('unfinished');
  button = document.getElementById('add-item');
  button.onclick = function(event) {
    event.preventDefault();
    TodoApp.add_to_list(list);
    return false;
  };
};


var TodoApp = {

};

TodoApp.add_to_list = function(list) {
  var new_li = document.createElement('li'),
  new_item_text = document.getElementById('new-task-field');
  new_li.className = 'items';
  new_li.innerHTML = new_item_text.value;
  new_item_text.value = '';
  list.appendChild(new_li);
  return false;
};

// TodoApp.add_to_bad_list = function(list) {
//   var bad_li = document.createElement('li'),
//   bad_item_text = document.getElementById('new-bad-thing');
//   bad_li.innerHTML = bad_item_text.value;
//   bad_item_text.value = '';
//   list.appendChild(bad_li);
//   return false;
// };
