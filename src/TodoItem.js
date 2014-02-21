var TodoItem = {
};

TodoItem.addUnfinishedToFinished = function(unfinished_item, list, id){
	var complete_button = document.getElementById("unfinished").children[id + 1];
	complete_button.onclick = function(event){
		event.preventDefault();
		var new_list = document.createElement("li");
		new_list.innerHTML = unfinished_item[id].innerHTML;
		list.appendChild(new_list);
		id = parseInt(complete_button.id);
		document.getElementById(id).outerHTML = document.getElementById(id).outerHTML.replace(/input/g,"span");
		//document.getElementById('submit').click();
		return false;
	}
}


TodoItem.deleteThisItem = function(id){
	var delete_button = document.getElementById("unfinished").children[id + 2];
	delete_button.onclick = function(event){
		event.preventDefault();
		id = parseInt(delete_button.id) - 2;
		document.getElementById(id).remove();
		document.getElementById(id + 1).remove();
		document.getElementById(id + 2).remove();
		//document.getElementById('submit').click();
		return false;
	}
}
