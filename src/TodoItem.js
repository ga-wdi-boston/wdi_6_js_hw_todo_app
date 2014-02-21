var TodoItem = function(content){
  // local variables
  var el, completeButton, removeButton, todo, createdEl;
  todo = this;

  // custom validation
  if ( !content ) {
    throw new Error("Need to input something!");
  }

  // object properties
  this.content = content;
  this.createdAt = new Date();

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
    e.preventDefault();
    todo.complete();
  };

  // clickon removeButton
  removeButton.onclick = function (e) {
    e.preventDefault();
    todo.deleteThis();
  };
  /////////////////////////////////

  // Add element to object as a property value
  this.element = el;

  // Add object to unfinished array
  TodoApp.unfinishedTasks.push(this);

  return el;
};


TodoItem.prototype = {
  complete : function () {
    // local variables
    var index, i, length, list, completedList, date;
    list = TodoApp.unfinishedTasks;
    length = list.length;
    i = 0;
    completedList = document.getElementById('finished');

    // find index in list array
    for (; i < length;) {
      if ( this.content === list[i].content ) {
        index = i;
        break
      } else {
        i = i + 1;
      }
    }

    // remove item object from unfinished array
    list.splice(index, 1);

    // add completedAt property to it
    this.completedAt = new Date();

    //////// DOM update ////////////
    // add date <p> element
    date = document.createElement("p");
    date.innerHTML = "Completed At: " + this.completedAt.toDateString() + " " + this.completedAt.toLocaleTimeString();
    date.className = "meta-data";
    this.element.appendChild(date);
    // remove complete and delete buttons
    this.element.getElementsByClassName('complete')[0].remove();
    this.element.getElementsByClassName('delete')[0].remove();
    // append updated element to completedList
    completedList.appendChild(this.element);

    // update finished array with updated object
    TodoApp.finishedTasks.push(this);

    return true;
  },
  deleteThis :  function () {
    // local variables
    var index, i, length, list;
    list = TodoApp.unfinishedTasks;
    length = list.length;
    i = 0;

    // find index in list array
    for (; i < length;) {
      if ( this.content === list[i].content ) {
        index = i;
        break
      } else {
        i = i + 1;
      }
    }

    // remove object from list array
    list.splice(index, 1);

    // delete element from DOM
    this.element.remove();

    return true;
  }
}
