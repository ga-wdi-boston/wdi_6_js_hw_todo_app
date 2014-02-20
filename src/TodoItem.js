var TodoItem = function(content_of_item){
	this.content_of_item = content_of_item;
};

TodoItem.prototype.delete_button = function() {
	var new_delete_button = document.createElement('button');
	new_delete_button.innerHTML = 'delete';
	new_delete_button.className = 'delete-button';
	new_delete_button.onclick = function(event) {
		event.preventDefault();
		this.parentNode.remove();
		return false;
	};
	return new_delete_button;
};

TodoItem.prototype.move_button = function() {
	var finished_tasks = document.getElementById('finished');
	var new_move_button = document.createElement('button');
	new_move_button.innerHTML = 'completed';
	new_move_button.className = 'completed-button';
	new_move_button.onclick = function(event) {
		event.preventDefault();
		finished_tasks.appendChild(this.parentNode);
		this.remove();
		return false;
	};
	return new_move_button;
};
