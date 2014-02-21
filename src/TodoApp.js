window.onload = function(){
	var unfinishedButton = document.getElementById("submit");
	var id = 0;
	unfinishedButton.onclick = function(event){
		event.preventDefault();
		var that_id = 0;
		var unfinishedList = document.getElementById("unfinished");
		var i = 0;
		var finishedList;
		TodoApp.addToUnfinishedList(unfinishedList, id);
		unfinishedListChildren = document.getElementById("unfinished").children;
		while(i < unfinishedListChildren.length){
			if(parseInt(unfinishedListChildren[i].id) === id){
				that_id = i;
			}
			i++;
		}
		var finishedList = document.getElementById("finished");
		TodoItem.addUnfinishedToFinished(unfinishedListChildren, finishedList, that_id);
		TodoItem.deleteThisItem(that_id);
		id += 3;
		return false;
	}
	
}


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


