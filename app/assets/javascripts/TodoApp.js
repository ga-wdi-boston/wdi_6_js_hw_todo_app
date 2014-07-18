var TodoApp = {
  items: [],
  createItem: function(event) {
    var newItem = new TodoItem($('#item-text').val());
    if (/\S/.test(newItem.name)) {
      TodoApp.items.push(newItem);
      $('#unfinished-items').append(newItem.toHtml());
      $('#item-text').val('');
    }
    event.preventDefault();
  },
  completeItem: function() {
    if ($(this).parent().hasClass('unfinished-item')) {
      var item = TodoApp.findItem($(this).parent().data('id'));
      $(this).parent().remove();
      item.completedAt = new Date();
      item.isFinished = true;
      newNode = item.toHtml().removeClass('unfinished-item').addClass('finished-item');
      $('#finished-items').append(newNode);
    }
  },
  removeItem: function() {
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
  },
  sort: function() {
    var sortCriterion = ($(this).data('type'));
    var isFinished = ($(this).data('is-finished'));
    if (isFinished) {
      $('#finished-items .finished-item').remove();
    }
    else {
      $('#unfinished-items .unfinished-item').remove();
    }
    var items = TodoApp.items.filter(function (item) { return item.isFinished === isFinished; });
    items.sort(function (a, b) {
      if (a[sortCriterion] > b[sortCriterion])
        return 1;
      if (a[sortCriterion] < b[sortCriterion])
        return -1;
      return 0;
    });
    items.forEach(function(item){
      if (item.isFinished) {
        $('#finished-items').append(item.toHtml().removeClass('unfinished-item').addClass('finished-item'));
      }
      else {
        $('#unfinished-items').append(item.toHtml());
      }
    });
  }
};

