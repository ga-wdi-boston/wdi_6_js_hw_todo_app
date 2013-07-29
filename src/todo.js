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
  },
  completeTodo: function(aTodo) {
    finishedTodos.splice(finishedTodos.indexOf(aTodo), 1);
  },
  deleteTodo: function() {}
};

var todoItem = {
  // XXX
  // Do I need to set this at all?
  name: "",
  completed: false,
  setTodoText: function(text) {
    this.name = text;
  },
  completedButton: function() {},
  deleteButton: function() {},
  render: function() {
    todoElement = document.createElement('li');
    todoElement.innerHTML = this.name;
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
};