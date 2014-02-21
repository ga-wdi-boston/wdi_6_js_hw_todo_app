// Create everything on first pageload
window.onload = function() {

	var button;
	TodoApp.todo_list = document.getElementById('todo-list');
	TodoApp.completed_list = document.getElementById('completed-list');

	button = document.getElementById('new-thing-button');
	button.onclick = function(event) {
	 	event.preventDefault();
	  TodoApp.add_to_list(TodoApp.todo_list);
	  return false;
	}
};

// Todo namsepace
TodoApp = {
	 todo_list: null,
	completed_list: null
}


TodoApp.add_to_list = function(list) {

	var complete_button = document.createElement('button');
	complete_button.innerHTML = "Completed";
	complete_button.onclick = function(event) {
		event.preventDefault();
		TodoApp.switch_lists(this.parentNode);
	}

  var new_li = document.createElement('li'), new_item_text = document.getElementById('new-thing');
  new_li.innerHTML = new_item_text.value;
  new_item_text.value = "";
  if (new_li.innerHTML !== "") {
  	new_li.appendChild(complete_button);
    list.appendChild(new_li);
  }
  return true;
};

TodoApp.switch_lists = function(item) {
	item.children[0].remove();
	TodoApp.todo_list.removeChild(item);
	// debugger

	TodoApp.completed_list.appendChild(item);

  return true;
};

