var TodoApp = {

};

TodoApp.popup = function() {
	alert('this shit workin?');
	return false;
};

TodoApp.new_item = function(list) {

	var new_item_text = document.getElementById('new-task-field').value;
	new_item = new TodoItem(new_item_text);
	todo_html = new_item.render();
	list.appendChild(todo_html);
};

TodoApp.complete_item = function(list_item) {

	new_list = document.getElementById('finished-items');
	list_item.parentNode.removeChild(list_item);
	new_li = TodoApp.change_item(list_item);
	new_list.appendChild(new_li);
};

TodoApp.change_item = function(list_item) {
	var button = document.createElement('button');
	button.className = 'delete';
	button.innerHTML = 'Delete';

	span = list_item.getElementsByTagName("span")[0];
	old_button = span.getElementsByTagName("button")[0];
	span.removeChild(old_button);
	//span.appendChild(button);
	return list_item;
};

TodoApp.delete_item = function(list_item) {
	list_item.parentNode.removeChild(list_item);
};

