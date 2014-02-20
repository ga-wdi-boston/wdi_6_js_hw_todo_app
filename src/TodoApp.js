window.onload = function(){
	var add_button, unfinished_list;
	add_button = document.getElementById('add-button');
	unfinished_list = document.getElementById('unfinished');

	add_button.onclick = function(event){
		event.preventDefault();
		TodoApp.newTodo(unfinished_list);
		return false;
	};

};


var TodoApp = {};

TodoApp.unfinished_tasks = [];
TodoApp.finished_tasks = [];

TodoApp.newTodo = function(list){
	var form_text, item;
	form_text = document.getElementById('new-task-field');
	item = new TodoItem(form_text.value);
	list.appendChild(item.render_me());
	form_text.value = ''
	this.unfinished_tasks.push(item)
};

TodoApp.deleteTodo = function(TodoItem, list){
	list.removeChild(TodoItem);
};

TodoApp.completeTodo = function(TodoItem){
	var finished_list = document.getElementById('finished');
	var unfinished_list = document.getElementById('unfinished');

	unfinished_list.removeChild(TodoItem);
	finished_list.appendChild(TodoItem);
};
