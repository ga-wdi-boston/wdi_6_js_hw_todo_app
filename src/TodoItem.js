var TodoItem = function(content){
  if ( !content ) {
    throw new Error("invalid");
  }
  this.content = content;
  TodoApp.unfinishedTasks.push(this);
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
