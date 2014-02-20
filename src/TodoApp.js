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
TodoApp.tasks = [];

TodoApp.renderLists = function() {
	var i = 0, length = this.tasks.length;
	var finished_list = document.getElementById('finished');
	var unfinished_list = document.getElementById('unfinished');

	finished_list.innerHTML = '';
	unfinished_list.innerHTML = '';

	for(;i < length;){
		if(TodoApp.tasks[i].deleted === false){
			if(TodoApp.tasks[i].completed === false){
				unfinished_list.appendChild(TodoApp.tasks[i].render_me());
			} else {
				finished_list.appendChild(TodoApp.tasks[i].render_me());
			};
		};
		i = i + 1;
	};
};

TodoApp.newTodo = function(list){
	var form_text, item;
	form_text = document.getElementById('new-task-field');
	item = new TodoItem(form_text.value);
	form_text.value = '';
	this.tasks.push(item);
	this.renderLists();
};


