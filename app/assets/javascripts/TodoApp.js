var TodoApp = {
  addNewItem: function(){
    var itemInput = $('#new-item').val();
    if (itemInput!== '') {
     var newToDo = new TodoItem(itemInput);
     var newItem = $('<li>').html(newToDo.date + " | " + newToDo.text + " | " + TodoApp.completeButton() + " | " + TodoApp.deleteButton());
      $('#unfinished-list').append(newItem);
      $('#new-item').val('');
      event.preventDefault();
    }
  },

  completeButton: function(){
    return '<a href="#" class="btn btn-small btn-default" id="complete-item-button">Complete</a>';
  },

  deleteButton: function(){
    return '<a href="#" class="btn btn-small btn-default" id="delete-item-button">Delete</a>';
  }
};



