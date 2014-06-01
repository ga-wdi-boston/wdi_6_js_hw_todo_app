$(document).ready(function() {

  $("#todo-input" ).on('submit', TodoApp.addNewItem);
  // $(".delete-todo").on('click', TodoApp.deleteItem);
  $('#todo-list-pending').on('click', '.delete-todo', TodoApp.deleteItem);




});



// TodoApp.display_all(todo_list);
// TodoApp.display_all(completed_list);

// for (var i=0; i < TodoApp.todo_list.length; i++) {
//   document.write(TodoApp.todo_list[i] + "<br />");
// }

// for (var i=0; i < TodoApp.completed_list.length; i++) {
//   document.write(TodoApp.todo_list[i] + "<br />");
// }

