var TodoApp = {

  todo_list: [],
  completed_list: [],

  addNewItem: function(event){
    var itemInput = $('#todo-field').val();

    var newItem = $('<li>').text(newTodo);

    if (itemInput === '') {
      $('span').text( "Can't submit an empty field!" ).show().fadeOut( 1000 );
      event.preventDefault();
    } else {
      debugger;
      var newTodo = new TodoItem(itemInput);
      TodoApp.todo_list.push(newTodo);
      // $('#todo-list').append(newItem);
      // $('#todo-field').val('');
      event.preventDefault();
    }
  }



};
