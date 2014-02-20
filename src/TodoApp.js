var TodoApp = {
  makeTodoItem: function(task) {
    var newTodo = new TodoItem(task);
    TodoApp.unfinishedItems.push(newTodo);
    TodoApp.addTodo("unfinishedList", newTodo);
    return newTodo;
  },
  getUserInput: function() {
    var taskField = document.getElementById("taskField"),
        taskFieldValue = taskField.value; // Intermediate so we can empty input
        taskField.value = ""; // ...on this line
    return taskFieldValue;
  },
  onSubmitNew: function() {
    this.makeTodoItem(this.getUserInput());
    return true;
  },
  finishTodo: function(todo) {
    function moveTask(element, index, array) {
      if (element.task === todo.task) {
        TodoApp.finishedItems.push(TodoApp.unfinishedItems.splice(index,1)[0]);
        return true; // This stops the some iteration immediately
      }
    }
    this.unfinishedItems.some(moveTask);
  },
  deleteTodo: function(todo) {
    function deleteTask(element, index, array) {
      if (element.task === todo.task) {
        TodoApp.unfinishedItems.splice(index,1)[0];
        return true;
      }
    }
    this.unfinishedItems.some(deleteTask);
  },
  renderTodos: function() {
    var unfinishedList = document.getElementById("unfinishedList"),
        finishedList = document.getElementById("finishedList");

    var renderUnfinished = function (todoItem, index, array) {
      unfinishedList.appendChild(todoItem.renderSelf());
    };
    var renderFinished = function(todoItem, index, array) {
      finishedList.appendChild(todoItem.renderSelf());
    };
    unfinishedList.innerHTML = "";
    this.unfinishedItems.forEach(renderUnfinished)
    finishedList.innerHTML = "";
    this.finishedItems.forEach(renderFinished);
  },
  addTodo: function(list, todo) {
    var whichList = document.getElementById(list); // unfinishedList or finishedList
    whichList.appendChild(todo.renderSelf());
    this.renderTodos();
  },
  deleteTodo: function(list, todo) {

  },
  unfinishedItems: [],
  finishedItems:   []
};
