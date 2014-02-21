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
		var list_item = document.createElement('li');

		list_item.innerHTML = this.body;
		TodoApp.task_array.push(this);
		this.complete_button(list_item, this);
		this.delete_button(list_item, this);
		return list_item;
	},
	complete_button: function(list, item) {
		var element = document.createElement('a');
		element.innerHTML = "Complete";
		list.appendChild(element);
		list.children[0].onclick = function(e) {
			e.preventDefault();
			item.complete_self();
		};
	},
	delete_button: function(list, item) {
		var element2 = document.createElement('a');
		element2.innerHTML = "Delete";
		list.appendChild(element2);
		list.children[1].onclick = function(e) {
			e.preventDefault();
			item.delete_self();
		};
	},
	complete_self: function() {
		this.status = "completed";
		TodoApp.render_todo(TodoApp.task_array);
	},
	delete_self: function() {
		TodoApp.task_array.splice(this, 1);
		TodoApp.render_todo(TodoApp.task_array);
	}

};
