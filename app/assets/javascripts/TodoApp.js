var TodoApp = {

  all_items: [],

  addNewItem: function(){
    var itemInput = $('#new-item').val();
    if (itemInput!== '') {
     var newToDo = new TodoItem(itemInput);
     TodoApp.all_items.push(newToDo);
      $('#new-item').val('');
      event.preventDefault();
      TodoApp.displayLists(TodoApp.all_items);
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
