var todoApp = {
  createTask: function(text){
    if (text === "") {
        alert("Todos can't be blank");
    } else {
        var task = clone(todoItem);
        task.setTaskName(text);
        this.appendTask(task);
    }
  },
  appendTask: function(task) {
  this.ulElement().appendChild(task.render());
  todoItem.completedButton();
  },
  ulElement: function() {
  return document.getElementById("todo-items");
  },
  unfinishedItems: function(){
    return document.getElementById("todo-items");
  }
};

var todoItem = {
  render: function() {
  liTag = document.createElement('li');
  liTag.innerText = this.taskName;
  return liTag;
  },
  setTaskName: function(text) {
    this.taskName = text;
  },
  completedButton: function() {
    var button = document.createElement('button');
    button.innerText = "COMPLETE DIS";
    todoApp.unfinishedItems().appendChild(button);
  }
};

function clone(todoItem) {
  var Clone = function() {};
  Clone.prototype = todoItem;
  return new Clone();
}


var addTaskButton;

window.onload = function() {

    addTaskButton = document.getElementById("add-item");

    addTaskButton.onclick = function(event) {
      var taskVal = document.getElementById("new-task-field").value;
      todoApp.createTask(taskVal);
    };

};

