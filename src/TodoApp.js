var TodoApp = {
  makeTodoItem: function(task) {
    var newTodo = new TodoItem(task);
    TodoApp.unfinishedItems.push(newTodo);
    return newTodo;
  },
  getUserInput: function() {
    var taskField = document.getElementById("taskField");
    return taskField.value;
  },
  onSubmitNew: function() {
    this.makeTodoItem(this.getUserInput());
    return true;
  },
  unfinishedItems: [],
  finishedItems:   []
};
