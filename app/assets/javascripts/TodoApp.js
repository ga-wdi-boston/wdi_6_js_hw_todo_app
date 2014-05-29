var TodoApp = {
  addNewItem: function(){
    var itemInput = $('#new-item').val();
    if (itemInput!== '') {
     var newToDo = new TodoItem(itemInput);
     var newItem = $('<li>').text(newToDo.text);
      $('#unfinished-list').append(newItem);
      $('#new-item').val('');
      event.preventDefault();
    }
  }
};
