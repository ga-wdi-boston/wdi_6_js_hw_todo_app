var todoApp = {
  unfinishedTasks: [],
  createTask: function(taskToBeAdded) {
    if (taskToBeAdded !== "") {
      var newTask = Object.create(todoItem);
      newTask.name = taskToBeAdded;
      this.unfinishedTasks.push(newTask);
      this.appendTask(newTask);
    }
  },

  appendTask: function(taskToBeAppended) {
    var taskList = document.getElementById("todo-items");
    var taskItem = document.createElement("li");
    taskItem.innerHTML = taskToBeAppended.name;
    taskList.appendChild(taskItem);
    taskItem.appendChild(todoItem.completedButton());
    console.log("checking if appending is working");
  }
};

var todoItem = {
  name: 'Default New Task',
  completedButton: function() {
    console.log("check if complete button is working");
    var button = document.createElement("button");
    button.innerHTML = "Completed";

    button.onclick = function() {
      this.moveToFinished();
      this.removeTask();
    };

    return button;
  },
  addTaskToFinished: function() {
    // add li to completed list

  },
  removeTask: function() {
    // self remove li

  }
};

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
};
// newTodo = Object.create(todoItem);

window.onload = function () {
  var addItemButton = document.getElementById("add-item");

  addItemButton.onclick = function() {
    var taskToBeAdded = document.getElementById("new-task-field").value;
    todoApp.createTask(taskToBeAdded);
    console.log("checking if onclick is working");
  };
};