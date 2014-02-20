
window.onload = function() {
	TodoApp.create_unfinished_task();
};


var TodoApp = {};

TodoApp.add_to_list = function(list, type) {
	var new_li = document.createElement('li');
	var new_thing_to_add = document.getElementById(type);
	new_li.innerHTML = new_thing_to_add.value;
	new_thing_to_add.value = "";
	if(new_li.innerHTML !== "") {
		list.appendChild(new_li);
	};
	return false;
};

TodoApp.create_unfinished_task = function(){
	var unfinished_tasks = document.getElementById('unfinished');
	var create_button = document.getElementById('add-item');
	create_button.onclick = function(event) {
		event.preventDefault();
		TodoApp.add_to_list(unfinished_tasks, 'new-task-field');
		return false
	};
};







