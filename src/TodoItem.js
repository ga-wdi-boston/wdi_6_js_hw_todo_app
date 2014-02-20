// You will have instances of TodoItem
var TodoItem = function(body, options){
	if (body.length < 1) {
		throw new Error("Enter a valid task");
		alert("Please insert a valid task.")
	}
	var options = options || {};
	this.body = body;
	this.created_at = Date.now();
};
