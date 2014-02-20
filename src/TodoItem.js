var TodoItem = function(task){
  if (task.length === 0) {
    throw new Error("Invalid description");
  } else {
    this.task = task;
    this.status = "unfinished";
    this.createdAt = new Date();
  }
};

TodoItem.prototype = {
  renderSelf: function() {
    var buttons     = [ this.makeButton("delete") ],
        itemNode    = document.createElement("li"),
        that        = this, // use to set innerHTML later
        displayText = document.createElement("p");

    if (this.status === "unfinished") {
      buttons.push(this.makeButton("complete"));
    }

    itemNode.innerHTML = (function() {
      var formattedCreatedAt = that.createdAt.toLocaleDateString("en-US");
      return that.task + " <span class='meta-data'>" + formattedCreatedAt +
        "</span>";
    })();
    for (var i=0; i < buttons.length; i++) {
      itemNode.appendChild(buttons[i]);
    }
    return itemNode;
  },
  makeButton: function(typeName) {
    var newBtn = document.createElement("input");
        typeName = typeName || "complete",
        that = this; // Needed to pass to nested function

    newBtn = document.createElement("input");
    newBtn.type = "submit";
    newBtn.className = typeName;
    newBtn.value = typeName.capitalize();
    newBtn.onclick = function(event) {
      event.preventDefault();
      (typeName === "complete") ? TodoApp.finishTodo(that) : TodoApp.deleteTodo(that);
    }
    return newBtn;
  }
};
