window.onload = function() {
  var create_todo_button,
      unfinished_list;

  unfinished_list = document.getElementById('unfinished');
  create_todo_button = document.getElementById('create-button');
  create_todo_button.onclick = function(event) {
    event.preventDefault();
    TodoApp.add_to_list(unfinished_list);
    return false;
  };
};

var TodoApp = {

  add_to_list: function(list) {
    var new_li = document.createElement('li'),
        unfinished_list = document.getElementById('unfinished'),
        new_item_field = document.getElementById('add-item-field'),
        new_todo_item = new TodoItem(new_item_field.value);

    new_li.innerHTML = new_item_field.value;
    new_item_field.value = "";
    if(new_li.innerHTML !== "") {
      unfinished_list.appendChild(new_li);
      unfinished_list.appendChild(new_todo_item.delete_button());
      unfinished_list.appendChild(new_todo_item.finished_button());
    };
  }
};

