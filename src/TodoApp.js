window.onload = function() {
	var button,
			unfinished_list;

	unfinished_list = document.getElementById('unfinished');

	button = document.getElementById('add-item-button');
	button.onclick = function(event) {
		event.preventDefault();
		TodoApp.add_to_list(unfinished_list);
			return false;
		}
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
}
}