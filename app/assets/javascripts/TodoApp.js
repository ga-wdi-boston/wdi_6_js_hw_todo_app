var TodoApp = {

  todo_list: [],
  completed_list: [],

  addNewItem: function(event){
    var newTodo = $('#todo-field').val();
    var newItem = $('<li>').text(newTodo);

    if (newTodo === '') {
      $('span').text( "Can't submit an empty field!" ).show().fadeOut( 1000 );
      event.preventDefault();
    } else {
      debugger;
      TodoApp.todo_list.push(newTodo);
      // $('#todo-list').append(newItem);
      // $('#todo-field').val('');
      event.preventDefault();
    }
  }



};
