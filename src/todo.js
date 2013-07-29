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
  liTag.className = "todo-item";
  liTag.innerText = this.taskName;
  liTag.appendChild(this.completedButton());
  liTag.appendChild(this.deleteButton());
  return liTag;
  },
  setTaskName: function(text) {
    this.taskName = text;
  },
  completedButton: function() {
    var button = document.createElement('button');
    button.innerText = "COMPLETE";
      button.onclick = function(event){
        that = this;
        var finishedItem = that.parentNode;
        var completedList = document.getElementById("completed-items");
        completedList.appendChild(finishedItem);
        that.parentElement.removeChild(that);
      };
    return button;
  },
  deleteButton: function() {
    var button = document.createElement('button');
    button.innerText = "Delete";
      button.onclick = function(event){
        that = this;
        var deleteItem = that.parentNode;
        deleteItem.parentElement.removeChild(deleteItem);
      };
    return button;
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

