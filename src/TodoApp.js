window.onload = function() {
	var add_item_button = document.getElementById('new-thing-button');

	// add new item
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
				unfinished_list = document.getElementById('unfinished-items');

		if (new_item_text.value !== "") {


			new_li.className = "item";
			new_span.className = "item-text";
			new_span.innerHTML = new_item_text.value;

			var new_delete_button = this.create_new_delete_button();

		  unfinished_list.appendChild(new_li);
		  new_li.appendChild(new_span);
		  new_li.appendChild(new_delete_button);

			new_item_text.value = "";
		};
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
	}


};
