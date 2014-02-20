window.onload = function(){
  document.getElementById('add-item').onclick = function (event) {
    TodoApp.addTodo();
  };


  /////// Sort behavior - event listeners ////
  // Unfinished Tasks
  document.getElementById('sortCreatedNew').onclick = function (event) {
    TodoApp.sort(TodoApp.unfinishedTasks, 'createdAt', 'unfinished');
  };
  document.getElementById('sortAbcNew').onclick = function (event) {
    TodoApp.sort(TodoApp.unfinishedTasks, 'content', 'unfinished');
  };

  // Finished Tasks
  document.getElementById('sortCreatedDone').onclick = function (event) {
    TodoApp.sort(TodoApp.finishedTasks, 'createdAt', 'finished');
  };
  document.getElementById('sortCompletedDone').onclick = function (event) {
    TodoApp.sort(TodoApp.finishedTasks, 'completedAt', 'finished');
  };
  document.getElementById('sortAbcDone').onclick = function (event) {
    TodoApp.sort(TodoApp.finishedTasks, 'content', 'finished');
  };
};
