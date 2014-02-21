window.onload = function(){
	var unfinishedButton = document.getElementById("submit");
	var id = 0;
	unfinishedButton.onclick = function(event){
		event.preventDefault();
		var that_id = 0,
		    unfinishedList = document.getElementById("unfinished"),
		    i = 0,
		    finishedList;
		TodoApp.addToUnfinishedList(unfinishedList, id);
		unfinishedListChildren = document.getElementById("unfinished").children;
		while(i < unfinishedListChildren.length){
			if(parseInt(unfinishedListChildren[i].id) === id){
				that_id = i;
			}
			i++;
		}
		finishedList = document.getElementById("finished");
		TodoItem.addUnfinishedToFinished(unfinishedListChildren, finishedList, that_id);
		TodoItem.deleteThisItem(that_id);
		id += 3;
		return false;
	}
	
}
