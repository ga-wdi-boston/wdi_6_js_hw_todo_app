window.onload = function() {
  var your_name = prompt("Personalize your list by adding your name!"),
      unfinished,
      new_button;

  document.getElementById('name').innerHTML = your_name

  unfinished = document.getElementById('task-list');

  new_button = document.getElementById('new-task-button');
  new_button.onclick = function(event) {
    event.preventDefault();
    TodoApp.add_to_list(unfinished);
    return false;
  };
};

TodoApp = {};

  TodoApp.add_to_list = function(list) {
  var new_li = document.createElement('li');
      new_item_text = document.getElementById('new-task');
  new_li.innerHTML = new_item_text.value;
  new_item_text.value = "";
  if (new_li.innerHTML !== "") {
    list.appendChild(new_li);
  }
  return true;
  }

// TodoApp.change_lists = function(list) {
// var add_done = document.createElement('li'),
//     new_tasked_text = document.getElementById('add-done');
// new_li.innerHTML = new_tasked_text.value;
// new_tasked_text.value = "";
// if (new_li.innerHTML !== "") {
//   list.appendChild(new_li);
// }
// return true;
// }

// };
