var TodoApp = {

  unfinished: [],

  finished: [],

  addNewItem: function(){
    var itemInput = $('#new-item').val();
    if (itemInput!== '') {
     var newToDo = new TodoItem(itemInput);
     var newItem = newToDo.listElement();
     TodoApp.unfinished.push(newToDo);
     $('#unfinished-list').append(newItem);
      $('#new-item').val('');
      event.preventDefault();
    }
  },
};


