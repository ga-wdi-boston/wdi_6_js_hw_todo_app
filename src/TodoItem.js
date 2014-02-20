var TodoItem = function(content){
  var el, completeButton, removeButton;
  if ( !content ) {
    throw new Error("invalid");
  }
  this.content = content;
  TodoApp.unfinishedTasks.push(this);

  // DOM elements
  el = document.createElement("li");
  el.className = "items";
  completeButton = document.createElement("button");
  completeButton.value = "Complete";
  completeButton.className = "complete";
  removeButton = document.createElement("button");
  removeButton.value = "Remove";
  removeButton.className = "delete";

  el.innerHTML = content;
  el.appendChild(completeButton);
  el.appendChild(removeButton);
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
  }
}
