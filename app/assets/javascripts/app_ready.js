$(document).ready(function() {
  $('#create-new-item-button').on('click', TodoApp.addNewTodo);
  $('#unfinished-to-dos').on('click', 'li', function(){
    alert($(this).text());
  });
});

