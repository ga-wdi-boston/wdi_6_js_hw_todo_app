var TodoApp = {
  makeTodoItem: function(task) {
    var newTodo = new TodoItem(task);
    TodoApp.todoItems.push(newTodo);
    this.renderTodos();
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
    todo.status = "finished";
    todo.completedAt = new Date();
    this.renderTodos();
  },
  deleteTodo: function(todo) {
    function deleteTask(element, index, array) {
      if (element === todo) {
        TodoApp.todoItems.splice(index,1);
        return true;
      }
    }
    this.todoItems.some(deleteTask);
    this.renderTodos();
  },
  renderTodos: function() {
    var unfinishedList = document.getElementById("unfinishedList"),
        finishedList = document.getElementById("finishedList");

    var renderOne = function(todoItem, index, array) {
      if (todoItem.status === "unfinished") {
        unfinishedList.appendChild(todoItem.renderSelf());
      } else {
        finishedList.appendChild(todoItem.renderSelf());
      }
    };
    unfinishedList.innerHTML = "";
    finishedList.innerHTML   = "";
    this.todoItems.forEach(renderOne);
  },
  sortBy: function(options) {
    console.log(options);
    if (options.sort === "date") {
      this.todoItems.sort(function (a,b) {
        var aDate = a.completedAt || a.createdAt, // completedAt is null if not
            bDate = b.completedAt || b.createdAt;
        return aDate - bDate;
      });
    } else if (options.sort === "alpha") {
      this.todoItems.sort(function(a,b) {
        return (a.task > b.task);
      });
    }
    this.renderTodos();
  },
  todoItems: []
};
