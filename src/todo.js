var todoApp = {
  completedTask: [],
  unfinishedTask: [],
  createTask: function() {
    var input = document.getElementById("new-task-field").value;
    var newTask = Object.create(todoItem);
  },

  appendTask: function(newTask) {
    if (newTask !== "") {

    }
  }
};

var todoItem = {
  // var taskName,
  // setTaskText: function(text) {
  //   this.taskName = text;
  //   var document.createElement('li');
  // },
};

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
}
newTodo = Object.create(todoItem);



// window.onload = function () {
//   var addItemButton = document.getElementById("add-item");

//   addItemButton.onclick = function() {
//     todoApp.creatTask();
//   };

// };