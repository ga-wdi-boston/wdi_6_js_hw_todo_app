window.onload = function() {
	//Set variables
	var add_button,
		to_do_list,
		complete_button,
		delete_button;

	// set to do list variable
	to_do_list = document.getElementById('unfinished-items');

	add_button = document.getElementById('add-item');
	add_button.onclick = function(event) {
		event.preventDefault();
		TodoApp.new_item(to_do_list);
		return false;
	};
};
