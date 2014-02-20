var TodoItem = function(task){
  if (task.length === 0) {
    throw new Error("Invalid description");
  } else {
    this.task = task
    this.createdAt = new Date();
  }
};

TodoItem.prototype = {
  renderSelf: function() {
    var itemButton = this.makeButton(),
        itemText = this.task,
        itemNode = document.createElement("li");

    itemNode.innerHTML = itemText;
    itemNode.appendChild(itemButton);

    return itemNode;
  },
  makeButton: function(typeName) {
    var newBtn = document.createElement("input");
    typeName = typeName || "Complete";

    newBtn = document.createElement("input");
    newBtn.type = "submit";
    newBtn.className = typeName;
    newBtn.value = typeName;
    if (typeName === "Complete") {
      newBtn.onclick = function(event) {
        event.preventDefault();
        TodoApp.finishTodo(this);
      };
    } else {
      newBtn.onclick = function(event) {
        event.preventDefault();
        TodoApp.deleteTodo(this);
      };
    }
    return newBtn;
  }
};
