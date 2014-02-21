var TodoApp = {
};

TodoApp.addToUnfinishedList = function(list, id){
	var new_list = document.createElement("li"),
			new_item_text = document.getElementById("unfinished_item"),
			complete_button = document.createElement("input"),
			delete_button = document.createElement("input");
	complete_button.type = "submit";
	complete_button.value = "Complete It!";
	delete_button.type = "submit";
	delete_button.value = "Delete It!";
	new_list.id = id;
	complete_button.id = id + 1;
	delete_button.id = id + 2;
	new_list.innerHTML = new_item_text.value;
	new_item_text.value = "";
	if(new_list.innerHTML !== ""){
		list.appendChild(new_list);
		list.appendChild(complete_button);
		list.appendChild(delete_button);
	}
}


