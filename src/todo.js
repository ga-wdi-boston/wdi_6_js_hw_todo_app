window.onload = function() {
  var newItemBox = document.getElementById('new-task-field');
  var addItemButton = document.getElementById('add-item');
  var removeAllButton = document.getElementById('remove-all');
  addItemButton.onclick = function(event) {
    var newTaskString = newItemBox.value;
    todoApp.createTodo(newTaskString);
    console.log("clicked");
    newItemBox.value = "";
  };
  removeAllButton.onclick = function(event) {
    removeAll();
  };
};

var todoApp = {
  unfinishedTasks: [],
  createTodo: function(newTaskString) {
    if (newTaskString !== "") {
      var newlyCreatedTodo = clone(todoItem);
      newlyCreatedTodo.setTaskText(newTaskString);
      // debugger;
      this.unfinishedTasks.push(newlyCreatedTodo);
      this.appendTodo(newlyCreatedTodo);
    }
  },
  appendTodo: function(newlyCreatedTodo) {
    var targetParent = document.getElementById('todo-items');
    var targetChild = newlyCreatedTodo.render();
    targetParent.appendChild(targetChild);
  }
};

var todoItem = {
  status: false,
  // taskName: "",
  setTaskText: function(taskNameString) {
    this.taskName = taskNameString;
  },
  completedButton: function() {
    var completedButton = document.createElement('button');
    completedButton.innerHTML = "Completed";
    completedButton.addEventListener("click", function() {
      this.parentNode.parentNode.removeChild(this.parentNode);
      document.getElementById('completed-items').appendChild(this.parentNode);
      this.parentNode.removeChild(this);
    });
    return completedButton;
  },

  deleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function() {
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
    return deleteButton;
  },

  render: function() {
    var newTodoLi = document.createElement('li');
    var newTodoDiv = document.createElement('div');
    newTodoDiv.innerHTML = this.taskName;
    newTodoLi.appendChild(newTodoDiv);
    newTodoLi.appendChild(this.completedButton());
    newTodoLi.appendChild(this.deleteButton());
    return newTodoLi;
  }
};

function clone(parent) {
  var F = function() {};
  F.prototype = parent;
  return new F();
}

function removeAll() {
  var unfinishedTodos = document.getElementById('todo-items').childNodes;
  var finishedTodos = document.getElementById('completed-items').childNodes;
  for (i = unfinishedTodos.length - 1; i >= 0; i--) {
    document.getElementById('todo-items').removeChild(unfinishedTodos[i]);
  }
  for (i = finishedTodos.length - 1; i >= 0; i--) {
    document.getElementById('completed-items').removeChild(finishedTodos[i]);
  }
}


