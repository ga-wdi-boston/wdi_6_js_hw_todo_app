$(document).ready(function() {
  $('#item-submit').click(TodoApp.createItem);
  $(this).on('click', '.complete-btn', TodoApp.completeItem);
  $(this).on('click', '.delete-btn', TodoApp.removeItem);
  $(this).on('click', '#sort-unfinished-by-name', TodoApp.sort);
});

//$('#randomize-words-button').click($.proxy(this.randomizeWords, this));
