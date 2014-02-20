var TodoItem = function(text){
	this.text = text;

};

TodoItem.prototype.render = function() {
	var span = document.createElement('span'),
		button = document.createElement('button'),
		delete_button = document.createElement('button'),
		list_item = document.createElement('li');

	list_item.innerHTML = this.text;
	list_item.className = 'items';

	span.className = 'actions';
	button.className = 'complete';
	button.innerHTML = 'Complete';
	button.onclick = function(event){
		  	list_item = this.parentNode.parentNode;
		  	TodoApp.complete_item(list_item);
		  };
	delete_button.className = 'delete';
	delete_button.innerHTML = 'Delete';
	delete_button.onclick = function(event){
		  	list_item = this.parentNode.parentNode;
		  	TodoApp.delete_item(list_item);
		  };

	span.appendChild(button);
	span.appendChild(delete_button);
	list_item.appendChild(span);


	return list_item;
}

TodoItem.prototype.change = function(list_item) {
	span = list_item.getElementsByTagName("span")[0];
	button = span.getElementsByTagName("button")[0];
	span.removeChild(button);
	return list_item;
}
