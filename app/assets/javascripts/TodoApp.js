var TodoApp = {
  addItem: function(event) {
    event.preventDefault();
    var content = $('#item-input').val();
    if(content !== '') {
      $('#item-input').val('');
      var theItem = new TodoItem(content);
      $('#unsaved-list').append(theItem.generateElement());
    }
  }
};
