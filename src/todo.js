var todoApp = {};
var todoItem = {};

function clone(todoItem) {
  var Clone = function() {};
  Clone.prototype = todoItem;
  return new Clone();
}

// todoItem.text = function(text){
//   return text;
// };

todoApp.newTask = function(text) {
  var task = clone(todoItem);
  task.text = text;
  return task;
};

var addTaskButton;

var newTask = function() {
   var taskVal = document.getElementById("new-task-field").value;
   var newTask = todoApp.newTask(taskVal);
   var ulTag= document.getElementById("todo-items");
   var liTag = document.createElement('li');
   liTag.innerText = newTask.text;
   ulTag.appendChild(liTag);
};

window.onload = function() {

    addTaskButton = document.getElementById("add-item");

    addTaskButton.onclick = function(event) {
      newTask();
    };

};

