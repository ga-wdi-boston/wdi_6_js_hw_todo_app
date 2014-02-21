window.onload = function() {
	var add_item_button = document.getElementById('new-thing-button');
			// done_button = document.getElementsbyClassName('done');

	// add new item
	add_item_button.onclick = function(event) {
		event.preventDefault();
		TodoApp.add_to_unfinished_list();
		return false;
	};

	// mark item as done
	// done_button.onclick = function(event) {
	// 	event.preventDefault();
	// 	TodoApp.move_to_finished_list;
	// 	return false;
	// };

};

var TodoApp = {
	add_to_unfinished_list: function() {
		var new_li = document.createElement('li'),
				new_span = document.createElement('span'),
				// new_done_button = document.createElement('button'),
				// new_delete_button = document.createElement('button'),

				new_item_text = document.getElementById('new-thing-input'),
				unfinished_list = document.getElementById('unfinished-items');

		if (new_item_text.value !== "") {


			new_li.className = "item";
			new_span.className = "item-text";
			new_span.innerHTML = new_item_text.value;

			var new_done_button = this.create_new_done_button();
			// this.create_new_delete_button();

			// new_done_button.className = "done";
			// new_done_button.innerHTML = "done!";
			// new_delete_button.className = "delete";
			// new_delete_button.innerHTML = "delete";

		  unfinished_list.appendChild(new_li);
		  new_li.appendChild(new_span);
		  new_li.appendChild(new_done_button);
		  // new_li.appendChild(new_delete_button);

			new_item_text.value = "";
		};
	},

	// move_to_finished_list: function() {
	// 	var current_button = document.getElementsbyClassName('done');
	// },

	create_new_done_button: function() {
		var new_done_button = document.createElement('button');

		new_done_button.className = "done";
		new_done_button.innerHTML = "done!";
		// this.parentNode.appendChild(new_done_button);

		new_done_button.onclick = function(event) {
			event.preventDefault();
			this.parentNode.parentNode.removeChild(this.parentNode);
		};

		return new_done_button;
	}


};
