var todoApp = {
  // finishedTodos: [],
  // unfinishedTodos: [],
  createTodo: function(todoName) {
    var newTodo = clone(todoItem);
    newTodo.setTodoText(todoName);
    this.appendTodo(newTodo);
  },
  appendTodo: function(aTodo) {
    // XXX
    // adjust to check for falsiness more generally
    if (aTodo.name !== "") {
      document.getElementById('todo-items').appendChild(aTodo.render());
    }
  }
};

var todoItem = {
  // XXX
  // Do I need to set this at all?
  name: "",
  createdAt: new Date(),
  completedAt: null,

  setTodoText: function(text) {
    this.name = text;
  },

  completedButton: function() {
    var completedButton = document.createElement('button');
    completedButton.innerHTML = "Completed?";
    var thisItem = this;
    completedButton.className = 'completed-button';
    completedButton.onclick = function() {
      thisItem.completedAt = new Date();
      thisTodoDiv = this.parentElement;
      document.getElementById('completed-items').appendChild(thisItem.render());
      thisTodoDiv.parentElement.removeChild(thisTodoDiv);
    };

    return completedButton;
  },

  deleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function() {
      thisTodo = this.parentElement;
      thisTodo.parentElement.removeChild(thisTodo);
    };
    return deleteButton;
  },

  render: function() {
    // XXX
    // refactor this function to make it less verbose

    var todoElement = document.createElement('li');

    var todoNameDiv = document.createElement('div');
    todoNameDiv.innerText = this.name;
    todoElement.appendChild(todoNameDiv);

    var createdAtDiv = document.createElement('div');
    createdAtDiv.innerText = "Created at: " + this.createdAt;
    todoElement.appendChild(createdAtDiv);

    if (this.completedAt !== null) {
      var completedAtDiv = document.createElement('div');
      completedAtDiv.innerText = "Completed at: " + this.completedAt;
      todoElement.appendChild(completedAtDiv);
    }

    todoElement.appendChild(this.completedButton());
    todoElement.appendChild(this.deleteButton());

    return todoElement;
  }
};

// universal clone method, but in our program,
// should only be passed todoItem objects
function clone(aTodo) {
  var F = function() {};
  F.prototype = aTodo;
  return new F();
}

window.onload = function() {
  addItemButton = document.getElementById('add-item');
  newTodoField = document.getElementById('new-todo-field');

  addItemButton.onclick = function() {
    todoApp.createTodo(newTodoField.value);
    newTodoField.value = "";
  };

  clearTasksButton = document.getElementById('clear-tasks');
  clearTasksButton.onclick = function() {
    document.getElementById('todo-items').innerHTML = '';
    document.getElementById('completed-items').innerHTML = '';
  };
};