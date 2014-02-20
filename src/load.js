window.onload = function() {
	//Set variables
	var add_button,
		to_do_list,
		complete_button,
		delete_button;

	// set to do list variable
	to_do_list = document.getElementById('unfinished-items');


	add_button = document.getElementById('add-item');
	add_button.onclick = function(event) {
		event.preventDefault();
		TodoApp.new_item(to_do_list);

		// complete_buttons = document.getElementsByClassName('complete');
		// for (var i=0; i < complete_buttons.length; i++) {
		//   complete_buttons[i].onclick = function(event){
		//   	list_item = this.parentNode.parentNode;
		//   	TodoApp.complete_item(list_item);
		//   	//TodoApp.popup();

		//   	delete_buttons = document.getElementsByClassName('delete');
		//   	for (var i=0; i < delete_buttons.length; i++) {
		//   	  delete_buttons[i].onclick = function(event){
		//   	  	list_item = this.parentNode.parentNode;
		//   	  	TodoApp.delete_item(list_item);
		//   	  };
		//   	};
		//   };
		// }

		// delete_buttons = document.getElementsByClassName('delete');
		// for (var i=0; i < delete_buttons.length; i++) {
		//   delete_buttons[i].onclick = function(event){
		//   	list_item = this.parentNode.parentNode;
		//   	TodoApp.delete_item(list_item);
		//   };
		// };

		return false;
	};

	// complete_buttons = document.getElementsByClassName('complete');
	// for (var i=0; i < complete_buttons.length; i++) {
	//   complete_buttons[i].onclick = function(event){
	//   	//TodoApp.popup();
	//   	list_item = this.parentNode.parentNode;
	//   	TodoApp.complete_item(list_item);
	//   };
	// };


	// delete_buttons = document.getElementsByClassName('delete');
	// for (var i=0; i < delete_buttons.length; i++) {
	//   delete_buttons[i].onclick = function(event){
	//   	//TodoApp.popup();
	//   	list_item = this.parentNode.parentNode;
	//   	TodoApp.delete_item(list_item);
	//   };
	// };


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
