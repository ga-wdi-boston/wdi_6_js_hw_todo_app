$(document).ready(function() {
  $('#add-todo').on('click', TodoApp.addTodo);
});

var TodoApp = {

  addTodo: function(event){
    var newTodo = $('#todo-field').val();
    var newListItem = $('<li>').text(newTodo);
    $('.todo-list').append(newListItem);
    $('#todo-field').val('');
    event.preventDefault();
  }
};
