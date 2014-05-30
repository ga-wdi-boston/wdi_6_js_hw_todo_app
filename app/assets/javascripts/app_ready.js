$(document).ready(function() {
  $('#todo-field').on('submit', TodoApp.addNewItem);
  $('.btn-danger').on('click', TodoApp.deleteItem);
});
