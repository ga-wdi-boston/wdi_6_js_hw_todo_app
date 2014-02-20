var TodoItem = function(content_of_item){
	this.content_of_item = content_of_item;
};

TodoItem.prototype.delete_button = function() {
	var new_button = document.createElement('button');
	new_button.innerHTML = 'delete';
	new_button.className = 'delete-button';
	new_button.onclick = function(event) {
		event.preventDefault();
		this.parentNode.remove();
		return false;
	};
	return new_button
};
