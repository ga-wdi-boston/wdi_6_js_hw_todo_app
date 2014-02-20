var TodoItem = function(content){
  if ( !content ) {
    throw new Error("invalid");
  }
  this.content = content;
  TodoApp.unfinishedTasks.push(this);
};
