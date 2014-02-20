var TodoItem = function(text){
	this.text = text;

};

TodoItem.prototype.render = function() {
	var span = document.createElement('span'),
		button = document.createElement('button'),
		list_item = document.createElement('li');

	list_item.innerHTML = this.text;
	list_item.className = 'items';

	span.className = 'actions';
	button.className = 'complete';
	button.innerHTML = 'Complete';

	span.appendChild(button);
	list_item.appendChild(span);


	return list_item;
}
