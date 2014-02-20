var TodoItem = function(text){
	if(typeof(text) === 'string' && text.length > 0){
		this.text = text;
		this.date_created = new Date();
		this.deleted = false;
		this.completed = false;
	} else {
		throw new Error('Task is empty');
	}
};

TodoItem.prototype = {

	create_button: function(type){
		var button = document.createElement('button');
		button.innerHTML = type.toUpperCase();
		button.className = type;
		var original_item = this;
		button.onclick = function(event){
			event.preventDefault();

			if(type === 'delete'){
				original_item.delete();
			} else if(type === 'complete') {
				original_item.complete();
			};

			TodoApp.renderLists();
			return false;
		};
		return button;
	},

	delete: function(){
		this.deleted = true;
	},

	complete: function() {
		this.completed = true;
		this.date_completed = new Date();
	},

	delete_button: function(){
		var new_li = document.createElement('li');
		delete_button = this.create_button('delete');
		new_li.appendChild(delete_button);
		return new_li;
	},

	complete_button: function(){
		var new_li = document.createElement('li');
		var complete_button = this.create_button('complete');
		new_li.appendChild(complete_button);
		return new_li;
	},

	display_text: function(){
		var new_li = document.createElement('li'), date;

		if(this.date_completed) {
			date = 'Completed ' + this.date_completed;
		} else {
			date = 'Created ' + this.date_created;
		};
		new_li.innerHTML = this.text + ' | (' + date + ')';
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
		if(this.completed !== true) {
			sub_list.appendChild(this.complete_button());
		};
		return new_task;
	},

};
