$(document).ready(function() {
  $('#item-submit').click(TodoApp.createItem);
  $(this).on('click', '.complete-btn', TodoApp.completeItem);
  $(this).on('click', '.delete-btn', TodoApp.removeItem);
  $(this).on('click', '#sort-unfinished-by-name', TodoApp.sort);
  $(this).on('click', '#sort-unfinished-by-created-at', TodoApp.sort);
  $(this).on('click', '#sort-finished-by-name', TodoApp.sort);
  $(this).on('click', '#sort-finished-by-created-at', TodoApp.sort);
  $(this).on('click', '#sort-finished-by-completed-at', TodoApp.sort);
});

//$('#randomize-words-button').click($.proxy(this.randomizeWords, this));
