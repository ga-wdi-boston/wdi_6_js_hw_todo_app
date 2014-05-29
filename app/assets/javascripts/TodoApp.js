var TodoApp = {
  addNewItem: function(){
    var itemInput = $('#new-item').val();
    if (itemInput!== '') {
      var newItem = $('<li>').text(itemInput);

      $('#unfinished-list').append(newItem);
      $('#new-item').val('');
      event.preventDefault();
    }
  }
};
