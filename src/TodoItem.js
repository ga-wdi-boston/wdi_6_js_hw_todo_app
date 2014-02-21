// You will have instances of TodoItem
var TodoItem = function(body, options){
	if (body.length < 1) {
		throw new Error("Enter a valid task");
	}
	var options = options || {};
	this.body = body;
	this.status = options.status || "todo";
	this.created_at = new Date();
};

TodoItem.prototype = {
	add_self: function() {
		var list_item = document.createElement('li'),
				task = this;

		list_item.innerHTML = this.body + '<span class="meta-data">' + todo.created_at + '</span>';
		//TodoApp.task_array.push(this);
		this.complete_button(list_item, task);
		this.delete_button(list_item, task);
		return list_item;
	},
	complete_button: function(list_item, task) {
		var element = document.createElement('a');
		element.setAttribute("class", "text-primary my_btn");
		if (task.status === "completed"){
			element.setAttribute("class", "hidden");
		}
		element.innerHTML = "Complete";
		list_item.appendChild(element);
		list_item.children[1].onclick = function(e) {
			e.preventDefault();
			task.complete_self();
		};
	},
	delete_button: function(list_item, task) {
		var element2 = document.createElement('a');
		element2.setAttribute("class", "text-danger my_btn");
		element2.innerHTML = "Delete";
		list_item.appendChild(element2);
		list_item.children[2].onclick = function(e) {
			e.preventDefault();
			task.delete_self();
		};
	},
	complete_self: function() {
		this.status = "completed";
		TodoApp.render_todo(TodoApp.task_array);
	},
	delete_self: function() {
		var index = TodoApp.task_array.indexOf(this);
		TodoApp.task_array.splice(index, 1);
		TodoApp.render_todo(TodoApp.task_array);
	}
};
