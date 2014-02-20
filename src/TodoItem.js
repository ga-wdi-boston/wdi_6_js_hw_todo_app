var TodoItem = function(content){
  var el, completeButton, removeButton, todo;
  todo = this;
  if ( !content ) {
    throw new Error("Need to input something!");
  }
  this.content = content;
  TodoApp.unfinishedTasks.push(this);

  // DOM elements
  el = document.createElement("li");
  el.className = "items";
  completeButton = document.createElement("button");
  completeButton.innerHTML = "Complete";
  completeButton.className = "complete";
  removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.className = "delete";

  el.innerHTML = content;
  el.appendChild(completeButton);
  el.appendChild(removeButton);


  /////// Event Handlers ////////
  // clickon completeButton
  completeButton.onclick = function (e) {
    var completedList = document.getElementById('finished');
    e.preventDefault();

    todo.complete();

    completedList.appendChild(this.parentNode);
    this.remove();
    removeButton.remove();
  };

  // clickon removeButton
  removeButton.onclick = function (e) {
    e.preventDefault();

    todo.deleteThis();

    this.parentNode.remove();
  };
  return el;
};


TodoItem.prototype = {
  complete : function () {
    var index, i, length, list;
    list = TodoApp.unfinishedTasks;
    length = list.length;
    i = 0;
    for (; i < length;) {
      if ( this.content === list[i].content ) {
        index = i;
        break
      } else {
        i = i + 1;
      }
    }
    list.splice(index, 1);
    TodoApp.finishedTasks.push(this);
    return true;
  },
  deleteThis :  function () {
    var index, i, length, list;
    list = TodoApp.unfinishedTasks;
    length = list.length;
    i = 0;
    for (; i < length;) {
      if ( this.content === list[i].content ) {
        index = i;
        break
      } else {
        i = i + 1;
      }
    }
    list.splice(index, 1);
    return true;
  }
}
