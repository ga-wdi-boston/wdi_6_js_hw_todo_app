window.onload = function(){
	var add_button, unfinished_list, alpha_sort_button, date_sort_button;
	add_button = document.getElementById('add-button');
	unfinished_list = document.getElementById('unfinished');
	alpha_sort_button = document.getElementById('alpha-sort-button');
	date_sort_button = document.getElementById('date-sort-button');

	add_button.onclick = function(event){
		event.preventDefault();
		TodoApp.newTodo(unfinished_list);
		return false;
	};

	alpha_sort_button.onclick = function(event){
		event.preventDefault();
		TodoApp.sortArray('text');
		TodoApp.renderLists();
		return false;
	};

	date_sort_button.onclick = function(event){
		event.preventDefault();
		TodoApp.sortArray('date_created');
		TodoApp.renderLists();
		return false;
	};
};


var TodoApp = {};
TodoApp.tasks = [];

TodoApp.renderLists = function() {
	var i, length, finished_list, unfinished_list

	i = 0;
	length = this.tasks.length;
	finished_list = document.getElementById('finished');
	unfinished_list = document.getElementById('unfinished');

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

TodoApp.sortArray = function(field){

	TodoApp.tasks.sort(function(a, b) {
	  if (a[field] < b[field])
	     return -1;
	  if (a[field] > b[field])
	     return 1;
	  return 0;
	});

	return TodoApp.tasks;

};


