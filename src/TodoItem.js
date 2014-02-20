var TodoItem = function(content){
  var el, completeButton, removeButton, todo, createdEl;
  todo = this;
  if ( !content ) {
    throw new Error("Need to input something!");
  }

  // object properties
  this.content = content;
  this.createdAt = new Date();
  // Add to unfinished array
  TodoApp.unfinishedTasks.push(this);

  // DOM elements
  el = document.createElement("li");
  el.className = "items";
  // children of el
  createdEl = document.createElement("p");
  createdEl.innerHTML = "Created At: " + this.createdAt.toDateString() + " " + this.createdAt.toLocaleTimeString();
  createdEl.className = "meta-data";
  completeButton = document.createElement("button");
  completeButton.innerHTML = "Complete";
  completeButton.className = "complete";
  removeButton = document.createElement("button");
  removeButton.innerHTML = "Remove";
  removeButton.className = "delete";

  el.innerHTML = content;
  el.appendChild(createdEl);
  el.appendChild(completeButton);
  el.appendChild(removeButton);


  /////// Event Handlers ////////
  // clickon completeButton
  completeButton.onclick = function (e) {
    var completedList, date;
    completedList = document.getElementById('finished');
    e.preventDefault();

    todo.completedAt = new Date();
    date = document.createElement("p");
    date.innerHTML = "Completed At: " + todo.completedAt.toDateString() + " " + todo.completedAt.toLocaleTimeString();
    date.className = "meta-data";
    this.parentNode.appendChild(date);
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

  this.element = el;
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
