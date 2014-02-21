window.onload = function() {
	var add_item_button = document.getElementById('new-thing-button');

	add_item_button.onclick = function(event) {
		event.preventDefault();
		TodoApp.add_to_unfinished_list();
		return false;
	};

};

var TodoApp = {
	add_to_unfinished_list: function() {
		var new_li = document.createElement('li'),
				new_span = document.createElement('span'),

				new_item_text = document.getElementById('new-thing-input'),
				unfinished_list = document.getElementById('unfinished-items'),

				new_done_button = this.create_new_done_button(),
				new_delete_button = this.create_new_delete_button();

		if (new_item_text.value !== "") {

			new_li.className = "item";
			new_span.className = "item-text";
			new_span.innerHTML = new_item_text.value;

			// add to unfinished list
		  unfinished_list.appendChild(new_li);
		  new_li.appendChild(new_span);
		  new_li.appendChild(new_done_button);
		  new_li.appendChild(new_delete_button);

			new_item_text.value = "";
		};

		return false;
	},


	create_new_delete_button: function() {
		var new_delete_button = document.createElement('button');

		new_delete_button.className = "delete";
		new_delete_button.innerHTML = "delete";

		new_delete_button.onclick = function(event) {
			event.preventDefault();
			this.parentNode.parentNode.removeChild(this.parentNode);
			return false;
		};

		return new_delete_button;
	},


	create_new_done_button: function() {
		var new_done_button = document.createElement('button'),

				new_li = document.createElement('li'),
				new_span = document.createElement('span'),

				finished_list = document.getElementById('finished-items'),
				new_delete_button = this.create_new_delete_button();

		new_done_button.className = "done";
		new_done_button.innerHTML = "done!";

		new_done_button.onclick = function(event) {
			event.preventDefault();

			// delete from unfinished list
			this.parentNode.parentNode.removeChild(this.parentNode);

			// add to finished list
			new_li.className = "item";
			new_span.className = "item-text";
			new_span.innerHTML = this.parentNode.innerHTML;
			finished_list.appendChild(new_li);
			new_li.appendChild(new_span);
			new_li.appendChild(new_delete_button);

			return false;
		};

		return new_done_button;
	}


};
