
$(document).ready(function() {
  $('#todo-input').on('submit', TodoApp.addTodoItem);

});



var TodoApp = {
  addTodoItem: function(event){
    var newTodo = $('#todo-field').val();

    if(newTodo !== ''){
      var newTodoItem = $('<li>').text(newTodo);
      $('#todo-list').append(newTodoItem);
      $('#todo-field').val('');
    }
    event.preventDefault();
  }
};
