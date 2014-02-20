window.onload = function() {
	var add_button,
		to_do_list,
		complete_button,
		delete_button;

	to_do_list = document.getElementById('unfinished-items');

	add_button = document.getElementById('add-item');
	add_button.onclick = function(event) {
		event.preventDefault();
		TodoApp.new_item(to_do_list);
		return false;
	};

	complete_button = document.getElementsByClassName('complete');
	complete_button.onclick = function(event) {
		// event.preventDefault();
		TodoApp.popup();
		return false;
	};


};


// window.onload = function(){
// 	var your_name = prompt("What's your name?"),
// 		thing_list;

// 	thing_list = document.getElementById('fav-list');
// 	bad_thing_list = document.getElementById('bad-list');
// 	document.getElementById('name').innerHTML = your_name;


// 	// Good things
// 	button1 = document.getElementById('new-thing-button');
// 	button1.onclick = function(event) {
// 		event.preventDefault();
// 		MyApp.add_to_list(thing_list);
// 		return false;
// 	};

// 	// Bad things
// 	button2 = document.getElementById('new-bad-thing-button');
// 	button2.onclick = function(event) {
// 		event.preventDefault();
// 		MyApp.add_to_list(bad_thing_list);
// 		return false;
// 	};
// };
