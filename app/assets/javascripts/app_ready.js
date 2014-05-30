$(document).ready(function() {
  $('#todo-input').on('submit', TodoApp.newTodo);
  $(this).on('click', '.delete', TodoApp.delete);
  $(this).on('click', '.complete', TodoApp.complete);
  //$('#').on('click', 'li', function(){alert('This is the color ' + ($(this).text()));});
});
