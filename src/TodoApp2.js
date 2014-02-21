var TodoApp = {};

TodoApp.task_array = [];

TodoApp.render_todo = function(array) {
	var i = 0,
			l = array.length,
			todo_list = document.getElementById('todo-list'),
			completed_list = document.getElementById('completed-list');
			todo_list.innerHTML = "";
			completed_list.innerHTML = "";
	for(;i<l;) {
		if (array[i].status === "todo") {
			todo_list.appendChild(array[i].add_self());
		} else if (array[i].status === "completed") {
			completed_list.appendChild(array[i].add_self());
		}
		i = i + 1;
	};
};

window.onload = function() {
	var todo_list = document.getElementById('todo-list'),
			completed_list = document.getElementById('completed-list'),
			add_button = document.getElementById('button');

	add_button.onclick = function(e) {
		e.preventDefault();
		var new_content = document.getElementById('list-item').value,
				search_box = document.getElementById('list-item');
				todo = new TodoItem(new_content);
				search_box.value = "";

		TodoApp.task_array.push(todo);
		TodoApp.render_todo(TodoApp.task_array);

		return false;
	};
};
