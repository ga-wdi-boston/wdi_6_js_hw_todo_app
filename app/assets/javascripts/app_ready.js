$(document).ready(function() {
  $('#todo-field').on('submit', TodoApp.addTodo);
});

var TodoApp = {

  addTodo: function(event){
    var newTodo = $('#thingToDo').val();
    var newListItem = $('<li>').text(newTodo);
    $('.todo-list').append(newListItem);
    $('#thingToDo').val('');
    event.preventDefault();
  }

};
