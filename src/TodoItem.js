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
		if(type === 'delete'){
			button.innerHTML = '<span class="glyphicon glyphicon-trash"></span>';
		} else if(type === 'complete'){
<<<<<<< HEAD
			button.innerHTML = '<span class="glyphicon glyphicon-ok"></span> Done';
		};

=======
			button.innerHTML = 'Complete';
		};
>>>>>>> bc17eeaa103dfa77cdd85c1945dfd314b6862048
		button.className = 'btn btn-default ' + type;
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

	date_text: function(){
		var p = document.createElement('p')
		p.className = 'date-text';
		if(this.date_completed) {
<<<<<<< HEAD
			p.innerHTML = 'Completed ' + this.date_completed.toLocaleDateString();
		} else {
			p.innerHTML = 'Created ' + this.date_created.toLocaleDateString();
=======
			date = 'Completed ' + this.date_completed.toLocaleDateString();
		} else {
			date = 'Created ' + this.date_created.toLocaleDateString();
>>>>>>> bc17eeaa103dfa77cdd85c1945dfd314b6862048
		};
		return p;
	},

	display_text: function(){
		var new_li = document.createElement('li'), date;
		new_li.className = 'task-text';
		new_li.innerHTML = this.text;
		return new_li;
	},

	render_me: function(){
		var new_task, sub_list;

		new_task = document.createElement('li');
		sub_list = document.createElement('ul');
		sub_list.className = 'task-info'
		new_task.appendChild(sub_list);
		sub_list.appendChild(this.display_text());
		if(this.completed !== true) {
			sub_list.appendChild(this.complete_button());
		};
		sub_list.appendChild(this.delete_button());
<<<<<<< HEAD
		sub_list.appendChild(this.date_text());
=======
>>>>>>> bc17eeaa103dfa77cdd85c1945dfd314b6862048
		return new_task;
	},

};
