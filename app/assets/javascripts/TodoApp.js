var TodoApp = {
  items: [],
  createItem: function(event) {
    var newItem = new TodoItem($('#item-text').val());
    if (newItem.name.length > 0) {
      TodoApp.items.push(newItem);
      $('#unfinished-items').append(newItem.toHtml());
      $('#item-text').val('');
    }
    event.preventDefault();
  },
  completeItem: function(event) {
    if ($(this).parent().hasClass('unfinished-item')) {
      $(this).parent().removeClass('unfinished-item').addClass('finished-item');
      $('#finished-items').append($(this).parent());
    }
  },
  removeItem: function(event) {
    TodoApp.deleteItem(TodoApp.findItem($(this).parent().data('id')));
    $(this).parent().remove();
  },
  findItem : function(id) {
    return $.grep(TodoApp.items, function(item){ return item.id === id; })[0];
  },
  deleteItem: function(item) {
    var removalIndex = -1;
    for (var i = 0; i < TodoApp.items.length; i++) {
      if (TodoApp.items[i].id === item.id) removalIndex = i;
    }
    if (removalIndex != -1) TodoApp.items.splice(removalIndex, 1);
  }
};

