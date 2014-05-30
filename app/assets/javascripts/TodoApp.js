var TodoApp = {

  unfinished: [],

  finished: [],

  addNewItem: function(){
    var itemInput = $('#new-item').val();
    if (itemInput!== '') {
     var newToDo = new TodoItem(itemInput);
     TodoApp.unfinished.push(newToDo);
      $('#new-item').val('');
      event.preventDefault();
      TodoApp.displayLists(TodoApp.unfinished);
    }
  },

  displayLists: function(items){
    var arrayLength = items.length;
    $('.list-item').remove();
    for (var i = 0; i < arrayLength; i = i + 1) {
      var item = items[i];
      var listItem = item.listElement();
      $('#unfinished-list').append(listItem);
    }
  }
};
