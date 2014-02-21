var TodoApp = {}

window.onload = function(){

  TodoApp.unfinished_list = document.getElementById('unfinished');
  TodoApp.finished_list = document.getElementById('finished');


  TodoApp.button = document.getElementById('new-unfinished-item-button');


  TodoApp.button.onclick = function(event) {
    event.preventDefault();
    TodoApp.add_to_list(TodoApp.unfinished_list);
    return false;
  };

  // TodoApp.button2.onclick = function(event) {
  //   event.preventDefault();
  //   TodoApp.add_to_list(TodoApp.finished_list);
  //   return false;
  // };
};

TodoApp.add_to_list = function(list) {
      var input_field = event.target.previousElementSibling; // For the button that is clicked (the event.target), find its prior sibling (text box)
      var new_item = new TodoItem();

      new_item.addText(input_field.value);
      input_field.value = ""; // makes it so the text input is blank after putting a new list item
      if((new_item.getItemElement().innerHTML) != "") {
      new_item.clickHandler(TodoApp.toggle_position); //TodoApp.toggle_position(event);
      new_item.addDeleteButton();
      // new_item.addCompleteButton();
      list.appendChild(new_item.getItemElement());
    }
    return true;
};

//if the item's parent is unfinished, move to finished.
TodoApp.toggle_position = function(event) {
  if (event.target.parentNode === TodoApp.unfinished_list) {
    TodoApp.finished_list.appendChild(event.target);
  // } else {
  //   TodoApp.unfinished_list.appendChild(event.target);
  }
};


