$(document).ready(function() {
  $('#create-new-item-button').click(TodoApp.addNewItem);
  $('#unfinished-list').on('click', '#complete-item-button', function(){alert($(this).parent().text()); });
});
