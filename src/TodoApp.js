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

	// var new_li = document.createElement('li'),
	// 	new_item_text = document.getElementById('new-task-field').value;
	// new_li.innerHTML = new_item_text;
	// new_li.className = 'items';
	// new_li.create
	// list.appendChild(new_li);
}
