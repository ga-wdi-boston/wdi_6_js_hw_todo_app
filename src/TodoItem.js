var TodoItem = function(task){
  if (task.length === 0) {
    throw new Error("Invalid description");
  }
  var todo, completeButton, deleteButton;

  this.task = task;
  this.status = "unfinished";
  this.createdAt = new Date();
  this.completedAt = null;
  this.buttons = this.makeButtons(); // generate object of generic buttons
};

TodoItem.prototype = {
  renderSelf: function() {
    var itemNode    = document.createElement("li"),
        self        = this, // use to set innerHTML later
        buttons     = this.buttons,
        setInner;

    // Create inner text from task name and date
    setInner = function(date) {
      var formattedDate = (date.getMonth() + 1) + "." + date.getDate(),
          displayText = document.createElement("p");
      displayText.innerHTML = self.task + " <span class='meta-data'>" + formattedDate +
        "</span>";
      return displayText;
    };

    // Extra button if unfinished (complete)/use appropriate date obj
    // depending on if unfinished or finished
    if (this.status === "unfinished") {
      itemNode.appendChild(setInner(this.createdAt));
      itemNode.appendChild(buttons.complete);
    } else {
      itemNode.appendChild(setInner(this.completedAt));
    }
    itemNode.appendChild(buttons.delete);

    return itemNode;
  },
  makeButtons: function() {
    var completeButton = document.createElement("button"),
        deleteButton   = document.createElement("button"),
        self = this;

    completeButton.className = "complete btn btn-success";
    completeButton.innerHTML = "<span class='glyphicon glyphicon-ok'></span>";
    completeButton.onclick = function(event) {
      event.preventDefault();
      TodoApp.finishTodo(self);
    };

    deleteButton.className = "delete btn btn-danger";
    deleteButton.innerHTML = "<span class='glyphicon glyphicon-remove'></span>";
    deleteButton.onclick = function(event) {
      event.preventDefault();
      TodoApp.deleteTodo(self);
    };

    return {complete: completeButton, delete: deleteButton};
  }
};
