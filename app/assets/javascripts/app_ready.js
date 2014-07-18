$(document).ready(function() {
  $('#item-submit').click(TodoApp.createItem);
  $(this).on('click', '.complete-btn', TodoApp.completeItem);
  $(this).on('click', '.delete-btn', TodoApp.deleteItem);
});


