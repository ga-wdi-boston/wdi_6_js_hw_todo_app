window.onload = function() {

	TodoApp.unfinished_list = document.getElementById('unfinished');
	TodoApp.finished_list = document.getElementById('finished');

	TodoApp.add_button = document.getElementById('add-item-todo-button');
	TodoApp.add_button.onclick = function(event) {
		event.preventDefault();
		TodoApp.add_to_list(TodoApp.unfinished_list);
		return false;
	}

	TodoApp.add_button_2 = document.getElementById('add-item-finished-button');
		TodoApp.add_button_2.onclick = function(event) {
			event.preventDefault();
			TodoApp.add_to_list(TodoApp.finished_list);
			return false;
	}

	// TodoApp.remove_item_from_list = document.getElementById('finished')
	// 	TodoApp.remove_item_from_list = function(event) {
	// 		TodoApp.remove_from_list()

	// 		li.onclick =
	// 	}

};

var TodoApp = {
	add_to_list: function(list) {
		var new_line = document.createElement('li'),
		new_item_text = document.getElementById('add-item');
		new_line.innerHTML = new_item_text.value;
		new_item_text.value = "";
		if (new_line.innerHTML !=="") {
			list.appendChild(new_line);
		}
		return true;
	},

	// remove_from_list: function() {
	// 	var text_box_entry = document.getElementById('add-item-finished-button').previousSibling;
	// 	text_box_entry.parentNode.removeChild(text_box_entry);
	// },

	move_to_other_list: function() {
	}
}