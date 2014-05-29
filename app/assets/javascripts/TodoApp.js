var TodoApp = {

  unfinished: [],

  finished: [],

  addNewItem: function(){
    var itemInput = $('#new-item').val();
    if (itemInput!== '') {
     var newToDo = new TodoItem(itemInput);
     var newItem = $('<li>').html(newToDo.created_at + " | " + newToDo.text + " | " + TodoApp.completeButton() + " | " + TodoApp.deleteButton());
     TodoApp.unfinished.push(newToDo);
     $('#unfinished-list').append(newItem);
      $('#new-item').val('');
      event.preventDefault();
    }
  },

  completeButton: function(){
    var newElement = $('<a>');
    return '<a href="#" class="btn btn-small btn-default" id="complete-item-button">Complete</a>';
  },

  deleteButton: function(){
    return '<a href="#" class="btn btn-small btn-default" id="delete-item-button">Delete</a>';
  }
};



