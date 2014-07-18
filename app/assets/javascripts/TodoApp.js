var TodoApp = {
  items: [],
  createItem: function(event) {
    var newItem = new TodoItem($('#item-text').val());
    $('#unfinished-items').append(newItem.toHtml());
    $('#item-text').val('');
    event.preventDefault();
  },
  completeItem: function(event) {
    $('#finished-items').append($(this).parent());
  },
  deleteItem: function(event) {
    $(this).parent().remove();
  }
};
