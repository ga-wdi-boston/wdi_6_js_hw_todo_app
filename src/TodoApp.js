var TodoApp = {}

window.onload = function(){

  TodoApp.unfinished_list = document.getElementById('unfinished');
  TodoApp.finished_list = document.getElementById('finished');

  TodoApp.button = document.getElementById('new-unfinished-item-button');
  TodoApp.button2 = document.getElementById('new-finished-item-button');

  TodoApp.button.onclick = function(event) {
    event.preventDefault();
    TodoApp.add_to_list(TodoApp.unfinished_list);
    return false;
  };

  TodoApp.button2.onclick = function(event) {
    event.preventDefault();
    TodoApp.add_to_list(TodoApp.finished_list);
    return false;
  };
};

TodoApp.add_to_list = function(list) {
  var new_li = document.createElement('li'), // Create a new generic list item

      // For the button that is clicked (the event.target), find its prior sibling (text box)
      new_li_text = event.target.previousElementSibling;
  new_li.innerHTML = new_li_text.value;
  new_li_text.value = "";
  new_li.onclick = function(event) {
    TodoApp.toggle_position(event);
  }
  if(new_li.innerHTML != "") {
    list.appendChild(new_li);
  }
  return true;
};

TodoApp.toggle_position = function(event) {
  if (event.target.parentNode === TodoApp.unfinished_list) {
    TodoApp.finished_list.appendChild(event.target);
  } else {
    TodoApp.unfinished_list.appendChild(event.target);
  }
}
