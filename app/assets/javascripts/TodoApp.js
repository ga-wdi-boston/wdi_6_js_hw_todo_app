var TodoApp = {
  addNewTodo: function(event){
    var newTodo = $('#to-do-field').val();

    if (newTodo !== ''){
      var newItem = $('<li>').text(newTodo).css('item', newItem);
      $('#unfinished-to-dos').append(newItem);
      $('#to-do-field').val('');
    }
    event.preventDefault();
  }
};
