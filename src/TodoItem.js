var TodoItem = function(text){
	if(typeof(text) === 'string' && text.length > 0){
		this.text = text;
		this.date_created = new Date();
	} else {
		throw new Error('Task is empty');
	}
};

TodoItem.prototype = {

	delete_button: function(){
		var new_li = document.createElement('li');
		var delete_button = document.createElement('button');
		delete_button.innerHTML = 'Delete';
		delete_button.className = 'delete';
		delete_button.onclick = function(event){
			event.preventDefault();
			TodoApp.deleteTodo(this.parentNode.parentNode.parentNode, this.parentNode.parentNode.parentNode.parentNode);
			return false;
		};

		new_li.appendChild(delete_button);
		return new_li;
	},

	complete_button: function(){
		var new_li = document.createElement('li');
		var complete_button = document.createElement('button');
		complete_button.innerHTML = 'Done';
		complete_button.className = 'complete';
		complete_button.onclick = function(event){
			event.preventDefault();
			TodoApp.completeTodo(this.parentNode.parentNode.parentNode);
			return false;
		};
		new_li.appendChild(complete_button);
		return new_li;

	},

	display_text: function(){
		var new_li = document.createElement('li');
		new_li.innerHTML = this.text + ' | (Created ' + this.date_created + ')';
		return new_li;
	},

	render_me: function(){
		var new_task, sub_list;

		new_task = document.createElement('li');
		sub_list = document.createElement('ul');
		sub_list.class = 'task-info'
		new_task.appendChild(sub_list);
		sub_list.appendChild(this.display_text());
		sub_list.appendChild(this.delete_button());
		sub_list.appendChild(this.complete_button());

		return new_task;
	},

	complete_me: function(){
		this.date_completed = new Date();
	}

}
